import { z } from "zod";

/**
 * Input sanitization to prevent Cross-Site Scripting (XSS) attacks.
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Order placement validation schema enforcing strict types and bounds.
 * Prevents payload tampering and invalid order items.
 */
export const OrderItemSchema = z.object({
  productId: z.string().min(1, "Product ID is required"),
  variantLabel: z.string().min(1, "Variant label is required"),
  quantity: z.number().int().min(1, "Quantity must be at least 1").max(100, "Max quantity per item exceeded")
});

export const PlaceOrderSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters").max(100),
  customerEmail: z.string().email("Invalid email address"),
  customerPhone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  shippingAddress: z.string().min(10, "Shipping address must be detailed").max(500),
  items: z.array(OrderItemSchema).min(1, "Order must contain at least one item")
});

/**
 * Product creation & update validation schema for Admin panel.
 */
export const ProductSchema = z.object({
  name: z.string().min(2, "Product name required"),
  category: z.string().min(2, "Category required"),
  description: z.string().min(10, "Description required"),
  benefits: z.array(z.string()),
  ingredients: z.array(z.string()),
  variants: z.array(
    z.object({
      quantityLabel: z.string().min(1),
      price: z.number().positive("Price must be positive")
    })
  ).min(1, "At least one variant required"),
  images: z.array(z.string()).min(1, "At least one product image required"),
  isFeatured: z.boolean().default(false)
});

/**
 * Rate Limiting Tracker (in-memory sliding window for API endpoints)
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(ip: string, limit: number = 20, windowMs: number = 60000): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: limit - record.count };
}
