"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf, Zap, Award, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/40 via-emerald-50/30 to-slate-50 py-20 lg:py-28">
      
      {/* 1. LARGE FOUNDER PORTRAIT IMAGE FULLY COVERING BEHIND THE HERO TEXT */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Owner Image Layer Directly Behind Text */}
        <div className="absolute inset-0 w-full h-full opacity-25 lg:opacity-30 mix-blend-multiply">
          <img
            src="/images/owner.jpg"
            alt="Julie Koilraj - Founder & Owner of Julz Herbals"
            className="w-full h-full object-cover object-top filter contrast-125 saturate-120"
          />
        </div>

        {/* Glossy Ice & Glass Gradient Mask Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-slate-50/95 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/40 via-transparent to-transparent" />

        {/* Ambient Icy & Leaf Glow Orbs */}
        <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-seablue-300/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-leaf-300/25 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Icy Frosted Glass Founder Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full ice-frosted-badge text-slate-900 text-xs font-black uppercase tracking-widest shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <Award className="w-4 h-4 text-emerald-600" />
            Formulated By Founder Julie Koilraj • 100% Traditional Herbal Care
          </div>

          {/* GIANT ICE & GLASS REFRACTION TYPOGRAPHY HEADLINE */}
          <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.92] uppercase ice-title-glow">
            FEEL THE{" "}
            <br />
            {/* ICE GLASS TEXT CUTOUT WITH FOUNDER PHOTO & FROST SHINE */}
            <span 
              className="bg-[url('/images/owner.jpg')] bg-cover bg-center bg-clip-text text-transparent font-serif italic drop-shadow-2xl underline decoration-emerald-400 decoration-wavy underline-offset-8"
              style={{ WebkitBackgroundClip: 'text' }}
            >
              HERBAL
            </span>{" "}
            <span className="ice-glass-text drop-shadow-2xl">
              PURITY
            </span>
          </h1>

          {/* Subtext Quote in Translucent Glass Pill */}
          <div className="max-w-3xl mx-auto p-6 rounded-3xl ice-card border border-white/80 shadow-2xl space-y-2">
            <p className="text-lg sm:text-2xl text-slate-800 font-serif italic leading-relaxed">
              "Pure botanical hair oils, natural bath powders, and ultra-gentle baby care crafted with 24 traditional Indian herbs."
            </p>
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700 block pt-1">
              — Julie Koilraj, Founder & Owner
            </span>
          </div>

          {/* Nike Style Icy Action Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <Link
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 hover:from-emerald-700 hover:to-seablue-700 text-white font-extrabold px-10 py-5 rounded-full shadow-2xl transition-all duration-500 group text-sm uppercase tracking-wider border border-white/20 hover:scale-105"
            >
              Shop Herbal Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 ice-frosted-badge hover:bg-white text-slate-900 font-extrabold px-9 py-5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider shadow-lg hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Founder's Story
            </Link>
          </div>

          {/* Icy Glass Trust Highlights */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl ice-card border border-white/70 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-wider text-slate-800 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Zero Chemicals</span>
            </div>
            <div className="p-4 rounded-2xl ice-card border border-white/70 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-wider text-slate-800 shadow-sm">
              <HeartHandshake className="w-5 h-5 text-sky-600 shrink-0" />
              <span>100% Cruelty-Free</span>
            </div>
            <div className="p-4 rounded-2xl ice-card border border-white/70 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-wider text-slate-800 shadow-sm">
              <Leaf className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>24+ Organic Herbs</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
