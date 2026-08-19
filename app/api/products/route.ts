import { NextResponse } from "next/server";
import { INITIAL_PRODUCTS } from "@/lib/products-data";

const FASTAPI_URL = process.env.FASTAPI_URL || "http://127.0.0.1:8000";

export async function GET() {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/products`, {
      next: { revalidate: 60 },
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch {
    // Graceful fallback to local seed data
  }

  return NextResponse.json({
    success: true,
    products: INITIAL_PRODUCTS,
    source: "Next.js Local Fallback",
  });
}
