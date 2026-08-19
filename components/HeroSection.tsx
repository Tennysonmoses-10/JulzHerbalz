"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf, Heart, Zap, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 py-16 lg:py-24">
      
      {/* 1. LARGE FEATURED FOUNDER IMAGE CUTOUT BEHIND & ACROSS THE HERO TEXT AREA */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Large Founder Photo Cutout Layer */}
        <div className="absolute -top-10 right-0 lg:right-[5%] w-full lg:w-[55%] h-[110%] opacity-30 lg:opacity-35 mix-blend-multiply transition-opacity">
          <img
            src="/images/owner.jpg"
            alt="Julie Koilraj - Founder & Owner of Julz Herbals"
            className="w-full h-full object-cover object-top filter contrast-125 saturate-110"
          />
          {/* Smooth Glass & Gradient Edge Masking */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/60" />
        </div>

        {/* Ambient iOS Glass Glow Orbs */}
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-leaf-300/25 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-seablue-300/25 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6 text-center lg:text-left"
          >
            {/* Pill Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ios-glass text-slate-900 text-xs font-black uppercase tracking-widest border border-white/80 shadow-md">
              <Zap className="w-4 h-4 text-leaf-600 fill-leaf-400" />
              100% Traditional Herbal Excellence
            </div>

            {/* Giant Nike Headline with Founder Image Clipped INSIDE the Text */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] uppercase">
              FEEL THE{" "}
              <br className="hidden sm:inline" />
              {/* IMAGE CUTOUT INSIDE "HERBAL" TEXT */}
              <span 
                className="bg-[url('/images/owner.jpg')] bg-cover bg-center bg-clip-text text-transparent font-serif italic drop-shadow-md underline decoration-leaf-400 decoration-wavy underline-offset-8"
                style={{ WebkitBackgroundClip: 'text' }}
              >
                HERBAL
              </span>{" "}
              <span className="bg-gradient-to-r from-seablue-600 to-leaf-600 bg-clip-text text-transparent">
                PURITY
              </span>
            </h1>

            {/* Founder Quote Subtext */}
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl font-medium leading-relaxed pt-2">
              Handcrafted herbal hair oils, gentle botanical bath powders, and baby care formulations created by founder <strong className="text-slate-900 font-extrabold underline decoration-leaf-400">Julie Koilraj</strong> — enriched with 24 traditional herbs.
            </p>

            {/* Nike Action Buttons */}
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

            {/* Nike Trust Features */}
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

          {/* Right Hero Showcase Card - High Impact Founder Cutout Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* iPhone iOS Translucent Glass Card */}
              <div className="ios-glass border-2 border-white/90 rounded-[36px] p-6 shadow-2xl space-y-5">
                <div className="w-full h-80 rounded-[28px] bg-slate-100 relative overflow-hidden shadow-lg group border border-white/60">
                  <img
                    src="/images/owner.jpg"
                    alt="Julie Koilraj - Founder & Owner"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="nike-badge text-leaf-300 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> Founder & Owner
                    </span>
                    <h3 className="font-serif text-2xl font-extrabold tracking-tight mt-0.5">
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
