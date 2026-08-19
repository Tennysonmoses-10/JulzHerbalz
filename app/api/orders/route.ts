import { NextResponse } from "next/server";
import { PlaceOrderSchema, sanitizeInput, checkRateLimit } from "@/lib/security";
import { INITIAL_PRODUCTS } from "@/lib/products-data";
import { db } from "@/lib/db";

// In-memory fallback array for standalone dev testing
const inMemoryOrders: any[] = [];

export async function GET(request: Request) {
  try {
    // Attempt Prisma ORM query first if DB connected
    const dbOrders = await db.order.findMany({
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, orders: dbOrders });
  } catch {
    // Fallback to in-memory store
    return NextResponse.json({ success: true, orders: inMemoryOrders });
  }
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const { allowed } = checkRateLimit(ip, 10, 60000);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many order attempts. Please wait 1 minute." },
        { status: 429 }
      );
    }

    // 2. Body Payload Parsing
    const body = await request.json();

    // 3. Strict Zod Schema Validation
    const validationResult = PlaceOrderSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input data",
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const { customerName, customerEmail, customerPhone, shippingAddress, items } = validationResult.data;

    // 4. Input XSS Sanitization
    const sanitizedName = sanitizeInput(customerName);
    const sanitizedEmail = sanitizeInput(customerEmail);
    const sanitizedPhone = sanitizeInput(customerPhone);
    const sanitizedAddress = sanitizeInput(shippingAddress);

    // 5. Server-Side Price Calculation (Never trust client prices!)
    let calculatedTotal = 0;
    const validatedOrderItems = [];

    for (const item of items) {
      const product = INITIAL_PRODUCTS.find((p) => p.id === item.productId);
      if (!product) {
        return NextResponse.json(
          { success: false, error: `Product not found: ${item.productId}` },
          { status: 400 }
        );
      }

      const variant = product.variants.find((v) => v.quantityLabel === item.variantLabel);
      if (!variant) {
        return NextResponse.json(
          { success: false, error: `Variant ${item.variantLabel} not available for ${product.name}` },
          { status: 400 }
        );
      }

      const itemTotal = variant.price * item.quantity;
      calculatedTotal += itemTotal;

      validatedOrderItems.push({
        productId: product.id,
        variantLabel: variant.quantityLabel,
        quantity: item.quantity,
        unitPrice: variant.price,
      });
    }

    const orderNumber = `JULZ-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // 6. Save via Prisma ORM
    let createdOrder: any;
    try {
      createdOrder = await db.order.create({
        data: {
          orderNumber,
          customerName: sanitizedName,
          customerEmail: sanitizedEmail,
          customerPhone: sanitizedPhone,
          shippingAddress: sanitizedAddress,
          totalAmount: calculatedTotal,
          status: "PENDING",
          items: {
            create: validatedOrderItems,
          },
        },
        include: { items: true },
      });
    } catch (ormError) {
      // In-memory fallback
      createdOrder = {
        id: orderNumber,
        orderNumber,
        customerName: sanitizedName,
        customerEmail: sanitizedEmail,
        customerPhone: sanitizedPhone,
        shippingAddress: sanitizedAddress,
        totalAmount: calculatedTotal,
        items: validatedOrderItems,
        status: "PENDING",
        createdAt: new Date().toISOString(),
      };
      inMemoryOrders.unshift(createdOrder);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Order placed successfully",
        order: createdOrder,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error processing order" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { orderId, status } = await request.json();

    try {
      const updatedOrder = await db.order.update({
        where: { id: orderId },
        data: { status },
      });
      return NextResponse.json({ success: true, order: updatedOrder });
    } catch {
      const order = inMemoryOrders.find((o) => o.id === orderId);
      if (order) {
        order.status = status;
        return NextResponse.json({ success: true, order });
      }
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "Failed to update order status" }, { status: 500 });
  }
}
