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
        
        {/* Brand Logo with Nike Bold & iOS Glass Emblem */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-[18px] bg-gradient-to-tr from-leaf-600 to-seablue-500 p-1.5 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-all duration-300 border border-white/40">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M50 15 C28 15, 15 34, 15 55 C15 72, 30 84, 50 84 C70 84, 85 72, 85 55 C85 34, 72 15, 50 15 Z" fill="#4ade80" />
              <path d="M50 22 C50 22, 32 40, 32 57 C32 69, 42 76, 50 76 C58 76, 68 69, 68 57 C68 40, 50 22, 50 22 Z" fill="#38bdf8" />
              <path d="M50 22 Q50 49 50 76 M50 38 Q38 30 34 36 M50 49 Q62 40 66 47 M50 60 Q38 51 34 57" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-extrabold tracking-tighter text-slate-900 group-hover:text-leaf-700 transition-colors uppercase">
              Julz Herbals
            </span>
            <span className="nike-badge text-leaf-700 -mt-1 font-black">
              Pure Natural Care
            </span>
          </div>
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
