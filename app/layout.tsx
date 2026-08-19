import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { FloralCursorEffect } from "@/components/FloralCursorEffect";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julz Herbals | Pure Traditional Herbal Hair & Body Care",
  description:
    "Handcrafted herbal hair oils, gentle botanical bath powders, and baby care formulations enriched with over 24 traditional herbs like Amla, Moringa, Turmeric & Neem.",
  keywords: ["herbal hair oil", "moringa bath powder", "tan care pack", "baby hair oil", "natural shampoo", "julz herbals"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-gray-900 selection:bg-herbal-200 selection:text-herbal-900 relative">
        <ErrorBoundary>
          <Providers>
            <FloralCursorEffect />
            <Navbar />
            <CartDrawer />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
