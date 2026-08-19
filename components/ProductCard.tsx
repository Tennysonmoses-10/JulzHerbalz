"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Leaf, Check, ShoppingBag, ArrowRight } from "lucide-react";
import { ProductData } from "@/lib/products-data";
import { useCart } from "./Providers";

interface ProductCardProps {
  product: ProductData;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [hasAllImgFailed, setHasAllImgFailed] = useState(false);

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const currentImage = product.images[imgIndex] || product.images[0];

  const handleImageError = () => {
    if (imgIndex < product.images.length - 1) {
      setImgIndex(imgIndex + 1);
    } else {
      setHasAllImgFailed(true);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    addToCart({
      productId: product.id,
      name: product.name,
      category: product.category,
      image: currentImage || "/images/placeholder.png",
      variantLabel: currentVariant.quantityLabel,
      price: currentVariant.price,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="ios-glass-card rounded-[32px] overflow-hidden flex flex-col justify-between group relative">
      
      {/* Nike Style Image Showcase Container */}
      <Link href={`/products/${product.id}`} className="relative h-72 bg-gradient-to-b from-slate-100/80 via-white to-slate-50 flex items-center justify-center p-4 overflow-hidden block">
        
        {/* Category Pill - Nike Style Badge */}
        <span className="absolute top-4 left-4 z-10 nike-badge bg-slate-900 text-white px-3 py-1 rounded-full shadow-md">
          {product.category}
        </span>

        {/* Real Product Image or Fallback */}
        {!hasAllImgFailed && currentImage ? (
          <img
            src={currentImage}
            alt={product.name}
            onError={handleImageError}
            className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-500 shadow-md"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-700 group-hover:scale-110 transition-transform duration-500 shadow-sm">
            <Leaf className="w-12 h-12" />
          </div>
        )}

        {/* View Details Hover Badge */}
        <span className="absolute bottom-4 z-10 text-xs font-black uppercase tracking-wider bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 shadow-xl">
          View Product <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </Link>

      {/* Main Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          <Link href={`/products/${product.id}`} className="block group-hover:text-leaf-700 transition-colors">
            <h3 className="font-serif text-2xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
            {product.description}
          </p>

          {/* Quick Ingredient Preview Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.ingredients.slice(0, 4).map((ing, idx) => (
              <span
                key={idx}
                className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Quantity Variant Selector */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
              Select Size:
            </label>
            <Link
              href={`/products/${product.id}`}
              className="text-[11px] font-black text-seablue-600 hover:underline flex items-center gap-0.5 uppercase tracking-wider"
            >
              Details &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {product.variants.map((variant, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedVariantIndex(index);
                }}
                className={`text-xs font-bold py-2 px-3 rounded-xl border transition-all text-center ${
                  selectedVariantIndex === index
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:border-leaf-400"
                }`}
              >
                <span>{variant.quantityLabel}</span>
                <span className="block text-[10px] opacity-90 font-mono">₹{variant.price}</span>
              </button>
            ))}
          </div>

          {/* Pricing & Add to Cart Button */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Price</span>
              <span className="font-serif text-2xl font-extrabold text-slate-900">
                ₹{currentVariant.price}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center gap-2 font-black uppercase tracking-wider px-5 py-3.5 rounded-full text-xs transition-all duration-300 ${
                added
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-slate-900 hover:bg-leaf-700 text-white shadow-lg hover:shadow-xl"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
