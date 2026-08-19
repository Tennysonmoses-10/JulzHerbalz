"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white py-20 lg:py-28">
      
      {/* 1. BACKGROUND OWNER PHOTO (Julie Koilraj - Founder & Owner) BEHIND THE TEXT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/owner.jpg"
          alt="Julie Koilraj - Founder & Owner of Julz Herbals"
          className="w-full h-full object-cover object-top opacity-20 sm:opacity-25 filter blur-[1px] scale-105"
        />
        {/* Neon Light Green & Neon Blue Ambient Glow Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/70" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FF66]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00D2FF]/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content - Overlaid Cleanly on Founder Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6 text-center lg:text-left"
          >
            {/* Pill Tagline - Neon Light Green Accent */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#00FF66]/50 text-emerald-900 text-xs font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(0,255,102,0.25)]">
              <Sparkles className="w-4 h-4 text-[#00e65c] animate-spin-slow" />
              100% Traditional Herbal Formulations
            </div>

            {/* Main Headline with Neon Light Green & Neon Blue Accent */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15]">
              Nourish Your Body & Hair With{" "}
              <span className="bg-gradient-to-r from-[#00b348] via-[#00D2FF] to-[#00b348] bg-clip-text text-transparent underline decoration-[#00FF66] underline-offset-8">
                Nature's Purity
              </span>
            </h1>

            {/* Founder Quote Subtext */}
            <p className="text-lg text-gray-700 max-w-2xl font-normal leading-relaxed">
              Handcrafted herbal hair oils, gentle botanical bath powders, and baby care formulations created by founder <strong className="text-emerald-900 font-semibold">Julie Koilraj</strong> — enriched with 24 traditional herbs like Amla, Moringa, Turmeric & Neem.
            </p>

            {/* CTA Buttons - Neon Light Green + Neon Blue + White */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00e65c] hover:bg-[#00FF66] text-black font-extrabold px-8 py-4 rounded-full shadow-[0_0_25px_rgba(0,255,102,0.45)] transition-all duration-300 group text-sm"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-sky-50 text-[#0099ff] border-2 border-[#00D2FF] font-bold px-7 py-4 rounded-full transition-all duration-300 text-sm shadow-[0_0_20px_rgba(0,210,255,0.3)]"
              >
                Founder's Story
              </Link>
            </div>

            {/* Trust Badges - Neon Accents */}
            <div className="pt-6 border-t border-emerald-100/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <ShieldCheck className="w-4.5 h-4.5 text-[#00b348] flex-shrink-0" />
                <span>Zero Harsh Chemicals</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <HeartHandshake className="w-4.5 h-4.5 text-[#00D2FF] flex-shrink-0" />
                <span>Cruelty-Free & Pure</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <Leaf className="w-4.5 h-4.5 text-[#00b348] flex-shrink-0" />
                <span>24+ Botanicals</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Card - Founder Highlight & Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glassmorphism Founder Badge Card */}
              <div className="bg-white/95 backdrop-blur-xl border-2 border-[#00FF66]/40 rounded-3xl p-5 shadow-[0_0_30px_rgba(0,255,102,0.25)] space-y-4">
                <div className="w-full h-72 rounded-2xl bg-gradient-to-tr from-[#00FF66]/20 to-[#00D2FF]/20 relative overflow-hidden shadow-inner group">
                  <img
                    src="/images/owner.jpg"
                    alt="Julie Koilraj - Founder & Owner"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#00FF66]">
                      Founder & Owner
                    </span>
                    <h3 className="font-serif text-xl font-bold">
                      Julie Koilraj
                    </h3>
                    <p className="text-[11px] text-sky-200 leading-tight mt-0.5">
                      "Handcrafted with love for every family's natural wellness."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#00FF66]/20 border border-[#00FF66]/50 flex items-center justify-center text-[#00b348]">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 block">Julz Herbals</span>
                      <span className="text-[10px] text-gray-500 block">Pure Botanical Care</span>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="bg-[#00D2FF] hover:bg-sky-400 text-black text-xs font-extrabold px-4 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(0,210,255,0.4)]"
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
