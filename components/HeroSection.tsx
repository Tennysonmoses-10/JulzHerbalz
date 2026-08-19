"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf, Zap, Award, Droplets } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100/60 via-teal-50/50 to-slate-50 py-16 lg:py-24">
      
      {/* 1. AQUATIC WATER RIPPLES & GLOSSY ICE GLOW BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Large Crystal Clear Founder Portrait Background Layer */}
        <div className="absolute top-0 right-0 lg:right-[3%] w-full lg:w-[50%] h-full opacity-40 lg:opacity-50 mix-blend-multiply">
          <img
            src="/images/owner.jpg"
            alt="Julie Koilraj - Founder & Owner of Julz Herbals"
            className="w-full h-full object-cover object-top filter contrast-125 saturate-125"
          />
        </div>

        {/* Translucent Ice Glass Mask Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50/95 via-sky-50/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-slate-50/95" />

        {/* Ambient Icy Cyan & Emerald Orbs */}
        <div className="absolute -top-32 left-10 w-[650px] h-[650px] bg-sky-300/35 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-10 w-[650px] h-[650px] bg-emerald-300/30 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Giant Ice & Water Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* iPhone Frosted Glass Tagline Pill with Glossy Sheen */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full ice-frosted-badge glossy-shine text-slate-900 text-xs font-black uppercase tracking-widest shadow-xl">
              <Droplets className="w-4 h-4 text-sky-500 fill-sky-200 animate-pulse" />
              100% Organic • Water & Herbal Purity
            </div>

            {/* Giant Ice & Water Refraction Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] uppercase ice-title-glow">
              FEEL THE{" "}
              <br className="hidden sm:inline" />
              {/* IMAGE CUTOUT INSIDE "HERBAL" TEXT */}
              <span 
                className="bg-[url('/images/owner.jpg')] bg-cover bg-center bg-clip-text text-transparent font-serif italic underline decoration-sky-400 decoration-wavy underline-offset-8"
                style={{ WebkitBackgroundClip: 'text' }}
              >
                HERBAL
              </span>{" "}
              <span className="ice-glass-text drop-shadow-2xl">
                PURITY
              </span>
            </h1>

            {/* Quote in Glossy Frosted Ice Glass Card */}
            <div className="p-6 rounded-3xl ice-water-card glossy-shine border border-white/90 shadow-2xl space-y-2">
              <p className="text-base sm:text-xl text-slate-800 font-serif italic leading-relaxed">
                "Handcrafted herbal hair oils, gentle botanical bath powders, and baby care formulations enriched with over 24 traditional herbs."
              </p>
              <span className="text-xs font-black uppercase tracking-widest text-sky-700 block">
                — Julie Koilraj, Founder & Owner
              </span>
            </div>

            {/* Glossy Liquid Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 ice-water-btn glossy-shine text-white font-extrabold px-9 py-4.5 rounded-full shadow-2xl transition-all duration-300 text-sm uppercase tracking-wider hover:scale-105"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 ice-frosted-badge glossy-shine hover:bg-white text-slate-900 font-extrabold px-8 py-4.5 rounded-full transition-all duration-300 text-sm uppercase tracking-wider shadow-lg hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                Founder's Story
              </Link>
            </div>

            {/* iPhone Glass Trust Pills */}
            <div className="pt-6 grid grid-cols-3 gap-4 text-center">
              <div className="p-3.5 rounded-2xl ice-water-pill glossy-shine flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Toxins</span>
              </div>
              <div className="p-3.5 rounded-2xl ice-water-pill glossy-shine flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800">
                <HeartHandshake className="w-4 h-4 text-sky-600 shrink-0" />
                <span>100% Cruelty-Free</span>
              </div>
              <div className="p-3.5 rounded-2xl ice-water-pill glossy-shine flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800">
                <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24+ Herbs</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: HIGHLY VISIBLE GLOSSY FOUNDER PORTRAIT GLASS CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* iPhone iOS Translucent Crystal Glass Card with Glossy Shine */}
              <div className="ice-water-card glossy-shine p-6 shadow-2xl space-y-5 border-2 border-white">
                
                <div className="w-full h-96 rounded-[28px] bg-slate-100 relative overflow-hidden shadow-xl group border border-white">
                  {/* High Clarity Owner Photo */}
                  <img
                    src="/images/owner.jpg"
                    alt="Julie Koilraj - Founder & Owner"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-110"
                  />
                  
                  {/* Glass Liquid Water Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="nike-badge text-sky-300 flex items-center gap-1.5 font-black">
                      <Award className="w-4 h-4 text-amber-400" /> Founder & Owner
                    </span>
                    <h3 className="font-serif text-3xl font-extrabold tracking-tight mt-1 text-white drop-shadow-md">
                      Julie Koilraj
                    </h3>
                    <p className="text-xs text-sky-100 leading-relaxed mt-1 font-medium">
                      "Formulated with authentic botanical care for everyday family wellness."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400 p-0.5 shadow-md">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-sky-700 font-bold">
                        <Droplets className="w-5 h-5 text-sky-600" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-slate-900 block">Julz Herbals</span>
                      <span className="text-[10px] text-sky-700 font-bold uppercase block">Pure Botanical Care</span>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="ice-water-btn glossy-shine text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-full shadow-md"
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
