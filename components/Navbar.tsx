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
    <header className="sticky top-0 z-50 w-full ios-glass border-b border-white/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="Julz Herbals Official Logo"
            className="h-14 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation Links - Nike Clean Minimal Links */}
        <nav className="hidden md:flex items-center gap-9">
          <Link href="/" className="text-xs font-black uppercase tracking-wider text-slate-800 hover:text-leaf-700 transition-colors">
            Home
          </Link>
          <Link href="/#products" className="text-xs font-black uppercase tracking-wider text-slate-800 hover:text-leaf-700 transition-colors">
            Collection
          </Link>
          <Link href="/about" className="text-xs font-black uppercase tracking-wider text-slate-800 hover:text-leaf-700 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-xs font-black uppercase tracking-wider text-slate-800 hover:text-leaf-700 transition-colors">
            Contact
          </Link>
          {isAdmin && (
            <Link
              href="/admin/dashboard"
              className="text-xs font-black uppercase tracking-wider text-slate-900 bg-leaf-100 hover:bg-leaf-200 border border-leaf-300 px-4 py-2 rounded-full flex items-center gap-1.5 transition-all shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-leaf-700" />
              Admin
            </Link>
          )}
        </nav>

        {/* Action Controls: Auth & Cart with iOS Glass Pills */}
        <div className="flex items-center gap-3">
          
          {/* User Auth Profile / Login */}
          {session ? (
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-xs font-bold text-slate-700 bg-white/80 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
                Hi, {session.user?.name?.split(" ")[0] || "User"}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-xs font-bold text-slate-500 hover:text-red-600 underline"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-seablue-900 bg-seablue-100/80 hover:bg-seablue-200 border border-seablue-300/80 px-4 py-2 rounded-full transition-all shadow-xs"
            >
              <User className="w-3.5 h-3.5 text-seablue-700" />
              Google Sign-In
            </button>
          )}

          {/* Cart Icon & Floating iOS Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 rounded-full bg-white/90 hover:bg-leaf-50 border border-slate-200 text-slate-900 transition-all shadow-sm group"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform text-slate-900" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-leaf-600 to-seablue-600 text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-md animate-pulse">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-leaf-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden ios-glass border-b border-slate-200 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-fadeIn">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-extrabold uppercase tracking-wider text-slate-900 hover:text-leaf-700 py-1"
          >
            Home
          </Link>
          <Link
            href="/#products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-extrabold uppercase tracking-wider text-slate-900 hover:text-leaf-700 py-1"
          >
            Collection
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-extrabold uppercase tracking-wider text-slate-900 hover:text-leaf-700 py-1"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-extrabold uppercase tracking-wider text-slate-900 hover:text-leaf-700 py-1"
          >
            Contact Us
          </Link>
          {isAdmin && (
            <Link
              href="/admin/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-black uppercase tracking-wider text-leaf-700 py-1"
            >
              Admin Panel
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
