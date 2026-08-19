"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductCard } from "@/components/ProductCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { INITIAL_PRODUCTS } from "@/lib/products-data";
import { Leaf, Sparkles, Shield, Heart, Award, CheckCircle } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Hair Care", "Body Care", "Skin Care", "Baby Care"];

  const filteredProducts =
    selectedCategory === "All"
      ? INITIAL_PRODUCTS
      : INITIAL_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Carousel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-herbal-100 text-herbal-800 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Featured Collections
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Top Herbal Bestsellers
              </h2>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              Handpicked botanical formulations crafted with traditional ingredients for holistic daily wellness.
            </p>
          </div>
          <ProductCarousel products={INITIAL_PRODUCTS} />
        </ScrollReveal>
      </section>

      {/* 3. Product Catalog Grid with Category Filter */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              Explore Our Pure Herbal Range
            </h2>
            <p className="text-sm text-gray-600">
              Choose from our authentic hair oils, traditional bath powders, tan care packs, and gentle baby formulations.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-herbal-700 text-white shadow-md"
                      : "bg-herbal-50 text-gray-700 hover:bg-herbal-100 border border-herbal-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1} direction="up">
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. Why Julz Herbals / Benefits Banner */}
      <section id="benefits" className="bg-herbal-50/70 border-y border-herbal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-herbal-700 bg-herbal-100 px-3 py-1 rounded-full border border-herbal-200">
                The Julz Promise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Why Choose Julz Herbals?
              </h2>
              <p className="text-sm text-gray-600">
                We combine ancient herbal wisdom with strict purity checks to bring you gentle, effective care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-8 rounded-3xl border border-herbal-100 herbal-card-shadow space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-herbal-100 text-herbal-700 mx-auto flex items-center justify-center">
                  <Leaf className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">24+ Herbs & Botanicals</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Formulated with rich traditional ingredients including Amla, Neem, Moringa, Hibiscus, Turmeric, Sandalwood & Vetiver.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-herbal-100 herbal-card-shadow space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-herbal-100 text-herbal-700 mx-auto flex items-center justify-center">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">100% Chemical-Free</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Free from synthetic parabens, harsh sulfates, mineral oils, or artificial fragrances. Gentle for daily family use.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-herbal-100 herbal-card-shadow space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-herbal-100 text-herbal-700 mx-auto flex items-center justify-center">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">Tested & Approved</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Strict quality controls on raw herbs, batch processing, and hygienic packaging ensuring maximum potency.
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Customer Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="bg-gradient-to-r from-herbal-800 to-herbal-900 rounded-3xl text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl space-y-6 relative z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-herbal-300">
                Customer Stories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                "Harmony Hair Oil and Moringa Bath Powder changed our daily routine completely!"
              </h2>
              <p className="text-xs sm:text-sm text-herbal-100 font-light leading-relaxed">
                "Our hair feels smoother, less dry, and the herbal bath powder leaves skin fresh and clean without any chemical tightness."
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-herbal-700 border border-herbal-600 flex items-center justify-center font-bold text-sm text-herbal-200">
                  S
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Savitri R.</p>
                  <p className="text-[10px] text-herbal-300">Verified Buyer • Chennai</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
