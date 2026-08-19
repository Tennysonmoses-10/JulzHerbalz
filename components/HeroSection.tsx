"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf, Heart, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-slate-50 py-16 lg:py-24">
      
      {/* 1. FOUNDER IMAGE (Julie Koilraj) IN BACKGROUND BEHIND THE TEXT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/owner.jpg"
          alt="Julie Koilraj - Founder & Owner of Julz Herbals"
          className="w-full h-full object-cover object-top opacity-20 filter blur-[1px] scale-105"
        />
        {/* iOS Translucent Backdrop & Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/70" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-leaf-300/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-seablue-300/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content - Nike Bold Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6 text-center lg:text-left"
          >
            {/* Pill Tagline - Nike Style Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ios-glass text-slate-900 text-xs font-black uppercase tracking-widest border border-white/80 shadow-md">
              <Zap className="w-4 h-4 text-leaf-600 fill-leaf-400" />
              100% Traditional Herbal Excellence
            </div>

            {/* Nike Bold Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[1.02] uppercase">
              Feel The{" "}
              <span className="bg-gradient-to-r from-leaf-600 via-seablue-600 to-leaf-600 bg-clip-text text-transparent underline decoration-leaf-400 decoration-wavy underline-offset-8">
                Herbal Purity
              </span>
            </h1>

            {/* Founder Quote Subtext */}
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl font-medium leading-relaxed">
              Handcrafted herbal hair oils, gentle botanical bath powders, and baby care formulations created by founder <strong className="text-slate-900 font-bold">Julie Koilraj</strong> — enriched with 24 traditional herbs.
            </p>

            {/* Nike CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-leaf-700 text-white font-extrabold px-9 py-4.5 rounded-full shadow-2xl transition-all duration-300 group text-sm uppercase tracking-wider"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 ios-glass hover:bg-white text-slate-900 border border-slate-300 font-extrabold px-8 py-4.5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider shadow-md"
              >
                Founder's Story
              </Link>
            </div>

            {/* Nike Specs Grid */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-800">
                <ShieldCheck className="w-5 h-5 text-leaf-600 flex-shrink-0" />
                <span>Zero Toxins</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-800">
                <HeartHandshake className="w-5 h-5 text-seablue-600 flex-shrink-0" />
                <span>100% Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-800">
                <Leaf className="w-5 h-5 text-leaf-600 flex-shrink-0" />
                <span>24+ Herbs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Card - iPhone iOS Translucent Glass Founder Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* iPhone iOS Translucent Glass Card */}
              <div className="ios-glass border-2 border-white/80 rounded-[36px] p-6 shadow-2xl space-y-5">
                <div className="w-full h-80 rounded-[28px] bg-slate-100 relative overflow-hidden shadow-lg group border border-white/60">
                  <img
                    src="/images/owner.jpg"
                    alt="Julie Koilraj - Founder & Owner"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="nike-badge text-leaf-400">
                      Founder & Owner
                    </span>
                    <h3 className="font-serif text-2xl font-extrabold tracking-tight">
                      Julie Koilraj
                    </h3>
                    <p className="text-xs text-seablue-100 leading-snug mt-1 font-medium">
                      "Formulated with authentic botanical care for everyday family wellness."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-700 shadow-sm">
                      <Heart className="w-4 h-4 text-red-500 fill-red-100" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-slate-900 block">Julz Herbals</span>
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Pure Botanical Care</span>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="bg-seablue-600 hover:bg-seablue-700 text-white text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-full transition-all shadow-md"
                  >
                    Read Story
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
