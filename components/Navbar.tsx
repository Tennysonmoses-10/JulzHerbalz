"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { ShoppingBag, User, Menu, X, ShieldCheck } from "lucide-react";
import { useCart } from "./Providers";

export function Navbar() {
  const { data: session } = useSession();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isAdmin = (session?.user as any)?.role === "ADMIN";

  return (
    <header className="sticky top-0 z-40 w-full glass-header border-b border-leaf-100 transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Leaf Green & Sea Blue Emblem */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-leaf-700 p-1.5 flex items-center justify-center text-white group-hover:bg-leaf-800 transition-all duration-300 shadow-md">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M50 15 C28 15, 15 34, 15 55 C15 72, 30 84, 50 84 C70 84, 85 72, 85 55 C85 34, 72 15, 50 15 Z" fill="#4ade80" />
              <path d="M50 22 C50 22, 32 40, 32 57 C32 69, 42 76, 50 76 C58 76, 68 69, 68 57 C68 40, 50 22, 50 22 Z" fill="#38bdf8" />
              <path d="M50 22 Q50 49 50 76 M50 38 Q38 30 34 36 M50 49 Q62 40 66 47 M50 60 Q38 51 34 57" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-gray-900 group-hover:text-leaf-700 transition-colors">
              Julz Herbals
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-leaf-700 -mt-1">
              Pure Natural Care
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-leaf-700 transition-colors">
            Home
          </Link>
          <Link href="/#products" className="text-sm font-medium text-gray-700 hover:text-leaf-700 transition-colors">
            Our Products
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-leaf-700 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-leaf-700 transition-colors">
            Contact Us
          </Link>
          {isAdmin && (
            <Link
              href="/admin/dashboard"
              className="text-sm font-semibold text-leaf-800 bg-leaf-100 hover:bg-leaf-200 border border-leaf-200 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-leaf-700" />
              Admin Panel
            </Link>
          )}
        </nav>

        {/* Action Controls: Auth & Cart */}
        <div className="flex items-center gap-4">
          
          {/* User Auth Profile / Login */}
          {session ? (
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-xs font-medium text-gray-700 bg-leaf-50 px-3 py-1 rounded-full border border-leaf-100">
                Hi, {session.user?.name?.split(" ")[0] || "User"}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-xs font-medium text-gray-500 hover:text-red-600 underline"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="flex items-center gap-1.5 text-xs font-semibold text-seablue-800 bg-seablue-50 hover:bg-seablue-100 border border-seablue-200 px-3.5 py-1.5 rounded-full transition-all shadow-xs"
            >
              <User className="w-3.5 h-3.5 text-seablue-600" />
              Google Sign-In
            </button>
          )}

          {/* Cart Icon & Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full bg-leaf-50 hover:bg-leaf-100 border border-leaf-200 text-leaf-800 transition-all shadow-xs"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 text-leaf-700" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-leaf-700 text-white text-[11px] font-bold flex items-center justify-center border-2 border-white animate-pulse">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-leaf-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-leaf-100 px-4 py-6 flex flex-col gap-4 shadow-lg animate-fadeIn">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-gray-800 hover:text-leaf-700 py-1"
          >
            Home
          </Link>
          <Link
            href="/#products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-gray-800 hover:text-leaf-700 py-1"
          >
            Our Products
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-gray-800 hover:text-leaf-700 py-1"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-gray-800 hover:text-leaf-700 py-1"
          >
            Contact Us
          </Link>
          {isAdmin && (
            <Link
              href="/admin/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-leaf-800 py-1"
            >
              Admin Panel
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
