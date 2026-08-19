import { NextResponse } from "next/server";
import { INITIAL_PRODUCTS } from "@/lib/products-data";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // 1. Attempt Prisma ORM query first
    const dbProducts = await db.product.findMany({
      include: { category: true, variants: true },
    });

    if (dbProducts && dbProducts.length > 0) {
      return NextResponse.json({ success: true, products: dbProducts });
    }

    // 2. Fallback to initial seed products dataset
    return NextResponse.json({ success: true, products: INITIAL_PRODUCTS });
  } catch {
    return NextResponse.json({ success: true, products: INITIAL_PRODUCTS });
  }
}
