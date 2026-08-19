import { NextResponse } from "next/server";
import { PlaceOrderSchema, sanitizeInput, checkRateLimit } from "@/lib/security";
import { INITIAL_PRODUCTS } from "@/lib/products-data";

const inMemoryOrders: any[] = [];
const FASTAPI_URL = process.env.FASTAPI_URL || "http://127.0.0.1:8000";

export async function GET(request: Request) {
  try {
    // 1. Attempt Python FastAPI fetch
    const response = await fetch(`${FASTAPI_URL}/api/orders`, {
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch {
    // Graceful fallback when Python API is offline
  }

  return NextResponse.json({
    success: true,
    orders: inMemoryOrders,
    source: "Next.js Graceful Fallback",
  });
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const { allowed } = checkRateLimit(ip, 10, 60000);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many order attempts. Please wait 1 minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
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

    // 2. Attempt forwarding order to Python FastAPI backend
    try {
      const pyResponse = await fetch(`${FASTAPI_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
      });

      if (pyResponse.ok) {
        const pyData = await pyResponse.json();
        return NextResponse.json(pyData, { status: 201 });
      }
    } catch {
      // Graceful fallback to local handler if Python API is offline
    }

    const { customerName, customerEmail, customerPhone, shippingAddress, items } = validationResult.data;

    let calculatedTotal = 0;
    const validatedOrderItems = [];

    for (const item of items) {
      const product = INITIAL_PRODUCTS.find((p) => p.id === item.productId);
      if (!product) continue;
      const variant = product.variants.find((v) => v.quantityLabel === item.variantLabel);
      if (!variant) continue;

      const itemTotal = variant.price * item.quantity;
      calculatedTotal += itemTotal;

      validatedOrderItems.push({
        productId: product.id,
        variantLabel: variant.quantityLabel,
        quantity: item.quantity,
        unitPrice: variant.price,
      });
    }

    const fallbackOrder = {
      id: `JULZ-FB-${Date.now()}`,
      orderNumber: `JULZ-FB-${Date.now()}`,
      customerName: sanitizeInput(customerName),
      customerEmail: sanitizeInput(customerEmail),
      customerPhone: sanitizeInput(customerPhone),
      shippingAddress: sanitizeInput(shippingAddress),
      totalAmount: calculatedTotal,
      items: validatedOrderItems,
      status: "PENDING",
      createdAt: new Date().toISOString(),
    };

    inMemoryOrders.unshift(fallbackOrder);

    return NextResponse.json(
      {
        success: true,
        message: "Order accepted (Resilient Client Fallback Mode)",
        order: fallbackOrder,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Error processing order" },
      { status: 500 }
    );
  }
}
