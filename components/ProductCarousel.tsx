"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { ProductData } from "@/lib/products-data";
import { ProductCard } from "./ProductCard";

interface ProductCarouselProps {
  products: ProductData[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Filter products by selected category tab
  const filteredProducts = activeCategory === "ALL" 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div id="products" className="relative space-y-8 py-8">
      
      {/* Nike Style Header Bar with Category Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="nike-badge text-leaf-700 block mb-1">
            Handcrafted Herbal Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tighter uppercase">
            Bestsellers & Products
          </h2>
        </div>

        {/* Nike Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {[
            { label: "All Products", key: "ALL" },
            { label: "Hair Care", key: "Hair" },
            { label: "Body Care", key: "Body" },
            { label: "Skin Care", key: "Skin" },
            { label: "Baby Care", key: "Baby" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveCategory(tab.key)}
              className={`text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                activeCategory === tab.key
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Slider Viewport with Nike-Style Floating Circular Toggle Buttons (< and >) */}
      <div className="relative group">
        
        {/* LEFT FLOATING TOGGLE BUTTON (<) */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-slate-900 hover:text-white transition-all duration-300"
          aria-label="Previous Products"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3]" />
        </button>

        {/* RIGHT FLOATING TOGGLE BUTTON (>) */}
        <button
          onClick={scrollNext}
          className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-slate-900 hover:text-white transition-all duration-300"
          aria-label="Next Products"
        >
          <ChevronRight className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Embla Slider Window */}
        <div className="overflow-hidden rounded-[32px] p-2 -m-2" ref={emblaRef}>
          <div className="flex -ml-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 transition-transform duration-500"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Slide Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-slate-900 shadow-xs"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
