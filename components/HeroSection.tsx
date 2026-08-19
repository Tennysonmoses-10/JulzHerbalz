"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf, Award, Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white py-16 lg:py-24">
      
      {/* 1. FOUNDER IMAGE (Julie Koilraj) IN BACKGROUND BEHIND THE TEXT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/owner.jpg"
          alt="Julie Koilraj - Founder & Owner of Julz Herbals"
          className="w-full h-full object-cover object-top opacity-20 filter blur-[1px] scale-105"
        />
        {/* Soft Leaf Green & Sea Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/75" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-leaf-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-seablue-200/30 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6 text-center lg:text-left"
          >
            {/* Pill Tagline - Light Leaf Green & Sea Blue Accent */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf-50 border border-leaf-200 text-leaf-800 text-xs font-semibold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-4 h-4 text-seablue-600" />
              100% Traditional Herbal Formulations
            </div>

            {/* Main Headline with Leaf Green & Sea Blue Accent */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15]">
              Nourish Your Body & Hair With{" "}
              <span className="leaf-gradient-text underline decoration-leaf-300 underline-offset-8">
                Nature's Purity
              </span>
            </h1>

            {/* Subtext mentioning Founder Julie Koilraj */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
              Handcrafted herbal hair oils, gentle botanical bath powders, and baby care formulations created by founder <strong className="text-leaf-800 font-semibold">Julie Koilraj</strong> — enriched with 24 traditional herbs like Amla, Moringa, Turmeric & Neem.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-leaf-700 hover:bg-leaf-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group text-sm"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-seablue-50 hover:bg-seablue-100 text-seablue-800 border border-seablue-200 font-semibold px-7 py-4 rounded-full transition-all duration-300 text-sm shadow-xs"
              >
                Our Founder's Story
              </Link>
            </div>

            {/* Trust Badges - Leaf Green & Sea Blue */}
            <div className="pt-6 border-t border-leaf-100 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                <ShieldCheck className="w-4.5 h-4.5 text-leaf-600 flex-shrink-0" />
                <span>Zero Harsh Chemicals</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                <HeartHandshake className="w-4.5 h-4.5 text-seablue-600 flex-shrink-0" />
                <span>Cruelty-Free & Pure</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                <Leaf className="w-4.5 h-4.5 text-leaf-600 flex-shrink-0" />
                <span>24+ Botanical Herbs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Card - Founder Highlight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glassmorphism Founder Badge Card */}
              <div className="bg-white/95 backdrop-blur-xl border border-leaf-200 rounded-3xl p-5 leaf-card-shadow space-y-4">
                <div className="w-full h-72 rounded-2xl bg-leaf-50 relative overflow-hidden shadow-sm group border border-leaf-100">
                  <img
                    src="/images/owner.jpg"
                    alt="Julie Koilraj - Founder & Owner"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-leaf-300">
                      Founder & Owner
                    </span>
                    <h3 className="font-serif text-xl font-bold">
                      Julie Koilraj
                    </h3>
                    <p className="text-[11px] text-seablue-100 leading-tight mt-0.5">
                      "Formulated with authentic herbal botanicals for everyday family wellness."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-700">
                      <Heart className="w-4 h-4 text-red-500 fill-red-100" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 block">Julz Herbals</span>
                      <span className="text-[10px] text-gray-500 block">Pure Botanical Care</span>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="bg-seablue-600 hover:bg-seablue-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-xs"
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
