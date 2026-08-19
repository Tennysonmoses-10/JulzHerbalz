"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-herbal-50 via-white to-herbal-50/50 py-20 lg:py-28">
      {/* Decorative Light-Green Background Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-herbal-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-herbal-100 border border-herbal-200 text-herbal-800 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-4 h-4 text-herbal-600 animate-spin-slow" />
              100% Traditional Herbal Formulations
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15]">
              Nourish Your Body & Hair With{" "}
              <span className="text-herbal-700 underline decoration-herbal-300 underline-offset-8">
                Nature's Purity
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
              Handcrafted herbal hair oils, gentle botanical bath powders, and baby care formulations enriched with over 24 traditional herbs like Amla, Moringa, Turmeric & Neem.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-herbal-700 hover:bg-herbal-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-herbal-700/25 hover:shadow-xl hover:shadow-herbal-700/35 transition-all duration-300 group text-sm"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-herbal-50 text-herbal-800 border border-herbal-200 font-semibold px-7 py-4 rounded-full transition-all duration-300 text-sm shadow-sm"
              >
                Our Botanical Story
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-herbal-100 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <ShieldCheck className="w-4 h-4 text-herbal-600 flex-shrink-0" />
                <span>Zero Harsh Chemicals</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <HeartHandshake className="w-4 h-4 text-herbal-600 flex-shrink-0" />
                <span>Cruelty-Free & Pure</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <Leaf className="w-4 h-4 text-herbal-600 flex-shrink-0" />
                <span>24+ Botanical Ingredients</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glassmorphism Product Card Highlight */}
              <div className="bg-white/90 backdrop-blur-xl border border-herbal-200 rounded-3xl p-6 herbal-card-shadow relative z-10 space-y-4">
                <div className="w-full h-64 rounded-2xl bg-herbal-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-6 space-y-2">
                    <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center text-herbal-700 shadow-sm">
                      <Leaf className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-herbal-900">Harmoni Hair Oil</h3>
                    <p className="text-xs text-herbal-700 font-medium">Nourishing 24-Herb Formula</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block">Starting at</span>
                    <span className="text-2xl font-bold text-herbal-900 font-serif">₹250</span>
                    <span className="text-xs text-gray-500 ml-1">/ 100 ml</span>
                  </div>
                  <Link
                    href="#products"
                    className="bg-herbal-700 hover:bg-herbal-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-herbal-200 rounded-2xl p-4 shadow-xl z-20 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-herbal-100 flex items-center justify-center text-herbal-700 font-bold text-sm">
                  ★ 4.9
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Loved by 1000+ Families</p>
                  <p className="text-[10px] text-gray-500">100% Herbal Customer Ratings</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
