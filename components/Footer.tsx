"use client";

import React from "react";
import Link from "next/link";
import { Heart, Shield, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-herbal-900 text-white pt-16 pb-12 border-t border-herbal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-herbal-800 p-1.5 flex items-center justify-center text-white border border-herbal-700 shadow-md">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                  <path d="M50 15 C28 15, 15 34, 15 55 C15 72, 30 84, 50 84 C70 84, 85 72, 85 55 C85 34, 72 15, 50 15 Z" fill="#2d6a4f" />
                  <path d="M50 22 C50 22, 32 40, 32 57 C32 69, 42 76, 50 76 C58 76, 68 69, 68 57 C68 40, 50 22, 50 22 Z" fill="#52b788" />
                  <path d="M50 22 Q50 49 50 76 M50 38 Q38 30 34 36 M50 49 Q62 40 66 47 M50 60 Q38 51 34 57" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white">Julz Herbals</span>
                <span className="text-[10px] uppercase tracking-widest text-herbal-300 -mt-1 font-semibold">Pure Natural Care</span>
              </div>
            </div>
            <p className="text-xs text-herbal-200 leading-relaxed font-light">
              Pure, traditional herbal hair care, bath powders, and baby care formulated with authentic botanical ingredients.
            </p>
            <p className="text-xs font-serif italic text-amber-200">
              "Feel More Beautiful, Naturally."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-herbal-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-herbal-100">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/#products" className="hover:underline">Herbal Collection</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-herbal-200 uppercase tracking-wider">
              Connect With Us
            </h4>
            <ul className="space-y-2.5 text-xs text-herbal-100">
              <li>
                <a
                  href="https://www.instagram.com/julz_herbals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" /> Instagram (@julz_herbals)
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61576616350550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-400" /> Facebook Page
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918689988753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" /> WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-herbal-200 uppercase tracking-wider">
              Customer Support
            </h4>
            <div className="space-y-2 text-xs text-herbal-100">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-herbal-300" /> +91 86899 88753
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-herbal-300" /> julzherbalproducts@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-herbal-300" /> Tamil Nadu, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-herbal-800 text-center text-xs text-herbal-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Julz Herbals. All rights reserved.</p>
          <p className="text-[11px] text-herbal-400">Crafted with Pure Herbal Botanicals</p>
        </div>

      </div>
    </footer>
  );
}
