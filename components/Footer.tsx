"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Heart, Shield, Phone, Mail, MapPin } from "lucide-react";

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
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-herbal-200 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-herbal-100">
              <li><Link href="#products" className="hover:underline">Herbal Hair Oils</Link></li>
              <li><Link href="#products" className="hover:underline">Botanical Bath Powders</Link></li>
              <li><Link href="#products" className="hover:underline">Gentle Baby Care</Link></li>
              <li><Link href="#about" className="hover:underline">About Our Ingredients</Link></li>
            </ul>
          </div>

          {/* Guarantee */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-herbal-200 uppercase tracking-wider">
              Our Promise
            </h4>
            <ul className="space-y-2 text-xs text-herbal-100">
              <li className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-herbal-300" /> 100% Herbal & Pure</li>
              <li className="flex items-center gap-2"><Heart className="w-3.5 h-3.5 text-herbal-300" /> Cruelty-Free</li>
              <li className="flex items-center gap-2"><Leaf className="w-3.5 h-3.5 text-herbal-300" /> No Artificial Preservatives</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-herbal-200 uppercase tracking-wider">
              Customer Support
            </h4>
            <div className="space-y-2 text-xs text-herbal-100">
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-herbal-300" /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-herbal-300" /> support@julzherbals.com</p>
              <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-herbal-300" /> Tamil Nadu, India</p>
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
