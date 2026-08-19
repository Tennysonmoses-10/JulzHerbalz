"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Leaf, Plus, Check, ShoppingBag, ArrowRight } from "lucide-react";
import { ProductData } from "@/lib/products-data";
import { useCart } from "./Providers";

interface ProductCardProps {
  product: ProductData;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const mainImage = product.images[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    addToCart({
      productId: product.id,
      name: product.name,
      category: product.category,
      image: mainImage || "/images/placeholder.png",
      variantLabel: currentVariant.quantityLabel,
      price: currentVariant.price,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="bg-white border border-herbal-100 hover:border-herbal-300 rounded-3xl overflow-hidden herbal-card-shadow transition-all duration-300 flex flex-col justify-between group">
      
      {/* Product Image / Visual Showcase */}
      <Link href={`/products/${product.id}`} className="relative h-64 bg-gradient-to-b from-herbal-50 to-white flex items-center justify-center p-4 overflow-hidden block">
        {/* Category Pill */}
        <span className="absolute top-4 left-4 z-10 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md border border-herbal-200 text-herbal-800 px-3 py-1 rounded-full shadow-xs">
          {product.category}
        </span>

        {/* Real Product Image or Fallback */}
        {mainImage && !imgError ? (
          <img
            src={mainImage}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-sm"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-herbal-100 flex items-center justify-center text-herbal-700 group-hover:scale-110 transition-transform duration-500 shadow-sm">
            <Leaf className="w-12 h-12" />
          </div>
        )}

        {/* View Details Hover Badge */}
        <span className="absolute bottom-4 z-10 text-xs font-semibold bg-herbal-800/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 shadow-md">
          View Details <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </Link>

      {/* Main Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          <Link href={`/products/${product.id}`} className="block group-hover:text-herbal-800 transition-colors">
            <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Quick Ingredient Preview Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.ingredients.slice(0, 4).map((ing, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-herbal-50 text-herbal-800 px-2 py-0.5 rounded-md border border-herbal-100"
              >
                {ing}
              </span>
            ))}
            {product.ingredients.length > 4 && (
              <span className="text-[10px] text-gray-400 font-medium py-0.5">
                +{product.ingredients.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Quantity Variant Selector */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block">
              Select Size:
            </label>
            <Link
              href={`/products/${product.id}`}
              className="text-[11px] font-bold text-herbal-700 hover:underline flex items-center gap-0.5"
            >
              Full Details &rarr;
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
                className={`text-xs font-semibold py-2 px-3 rounded-xl border transition-all text-center ${
                  selectedVariantIndex === index
                    ? "bg-herbal-700 text-white border-herbal-700 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-herbal-300"
                }`}
              >
                <span>{variant.quantityLabel}</span>
                <span className="block text-[10px] opacity-90 font-mono">₹{variant.price}</span>
              </button>
            ))}
          </div>

          {/* Pricing & Add to Cart */}
          <div className="flex items-center justify-between pt-3 border-t border-herbal-100">
            <div>
              <span className="text-xs text-gray-400 block font-medium">Price</span>
              <span className="font-serif text-2xl font-bold text-herbal-900">
                ₹{currentVariant.price}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-full text-xs transition-all duration-300 ${
                added
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-herbal-800 hover:bg-herbal-900 text-white shadow-md hover:shadow-lg"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart
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
