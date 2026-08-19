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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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

    // Auto-slide every 4 seconds
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4500);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative space-y-6 group">
      
      {/* Main Embla Viewport */}
      <div className="overflow-hidden rounded-3xl p-2 -m-2" ref={emblaRef}>
        <div className="flex -ml-4">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 transition-transform duration-500"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Controls Bar */}
      <div className="flex items-center justify-between pt-2">
        
        {/* Pagination Dot Indicator */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-herbal-700 shadow-xs"
                  : "w-2.5 bg-herbal-200 hover:bg-herbal-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Prev / Next Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollPrev}
            className="w-11 h-11 rounded-full bg-white hover:bg-herbal-700 hover:text-white text-herbal-900 border border-herbal-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="w-11 h-11 rounded-full bg-white hover:bg-herbal-700 hover:text-white text-herbal-900 border border-herbal-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>
  );
}
