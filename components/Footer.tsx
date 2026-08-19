"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Heart, Shield, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-herbal-900 text-white pt-16 pb-12 border-t border-herbal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-herbal-800 flex items-center justify-center text-herbal-300">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">Julz Herbals</span>
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
