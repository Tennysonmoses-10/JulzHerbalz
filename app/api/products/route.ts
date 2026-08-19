import { NextResponse } from "next/server";
import { INITIAL_PRODUCTS } from "@/lib/products-data";

export async function GET() {
  try {
    // Return seeded products dataset
    return NextResponse.json({ success: true, products: INITIAL_PRODUCTS });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
