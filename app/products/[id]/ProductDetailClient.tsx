"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  Leaf, 
  ArrowLeft, 
  CheckCircle2, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Star, 
  Heart,
  Clock,
  BookOpen,
  Target
} from "lucide-react";
import { INITIAL_PRODUCTS } from "@/lib/products-data";
import { useCart } from "@/components/Providers";

export default function ProductDetailClient() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;

  const product = INITIAL_PRODUCTS.find(
    (p) => p.id === productId || p.slug === productId
  );

  const { addToCart, setIsCartOpen } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-herbal-100 flex items-center justify-center text-herbal-700 mb-6">
          <Leaf className="w-10 h-10" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-3">Product Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm">
          The herbal product you are looking for may have been updated or renamed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-herbal-800 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-herbal-900 transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Storefront
        </Link>
      </div>
    );
  }

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const mainImage = product.images[0];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        productId: product.id,
        name: product.name,
        category: product.category,
        image: mainImage || "/images/placeholder.png",
        variantLabel: currentVariant.quantityLabel,
        price: currentVariant.price,
      });
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    setIsCartOpen(true);
  };

  const relatedProducts = INITIAL_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-herbal-50/60 border-b border-herbal-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-medium text-gray-600">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1.5 hover:text-herbal-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex items-center gap-2 text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link href="/" className="hover:text-herbal-800">Home</Link>
            <span>/</span>
            <span className="text-herbal-800 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Product Showcase / Image Gallery */}
          <div className="space-y-4 sticky top-28">
            <div className="relative aspect-square rounded-3xl bg-gradient-to-b from-herbal-50 to-white border border-herbal-100 p-6 flex items-center justify-center overflow-hidden shadow-sm group">
              
              {/* Category & Badge */}
              <span className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md border border-herbal-200 text-herbal-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
                {product.category}
              </span>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-herbal-200 text-gray-600 hover:text-red-500 transition-colors shadow-xs"
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              </button>

              {/* Product Visual */}
              {mainImage && !imgError ? (
                <img
                  src={mainImage}
                  alt={product.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-sm"
                />
              ) : (
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-herbal-100 flex items-center justify-center text-herbal-700 shadow-md group-hover:scale-105 transition-transform duration-500">
                  <Leaf className="w-24 h-24 sm:w-32 sm:h-32 text-herbal-600" />
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-herbal-800 bg-white/85 backdrop-blur-md px-4 py-2 rounded-2xl border border-herbal-100 shadow-sm">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-4 h-4 text-amber-500" /> 100% Organic & Handcrafted
                </span>
                <span className="font-semibold text-emerald-700">In Stock</span>
              </div>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-herbal-50/80 border border-herbal-100 text-center">
                <ShieldCheck className="w-5 h-5 text-herbal-700 mx-auto mb-1" />
                <span className="text-[11px] font-semibold text-gray-800 block">Dermat Tested</span>
                <span className="text-[9px] text-gray-500">Gentle & Safe</span>
              </div>
              <div className="p-3 rounded-2xl bg-herbal-50/80 border border-herbal-100 text-center">
                <Clock className="w-5 h-5 text-herbal-700 mx-auto mb-1" />
                <span className="text-[11px] font-semibold text-gray-800 block">Shelf Life</span>
                <span className="text-[9px] text-gray-500">{product.shelfLife}</span>
              </div>
              <div className="p-3 rounded-2xl bg-herbal-50/80 border border-herbal-100 text-center">
                <Truck className="w-5 h-5 text-herbal-700 mx-auto mb-1" />
                <span className="text-[11px] font-semibold text-gray-800 block">Fast Dispatch</span>
                <span className="text-[9px] text-gray-500">Across India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Purchase Controls */}
          <div className="space-y-8">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-600">(4.9 / 5.0 • 128 Reviews)</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price Display */}
            <div className="flex items-baseline gap-3 pb-6 border-b border-herbal-100">
              <span className="font-serif text-4xl font-bold text-herbal-900">
                ₹{currentVariant.price * quantity}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                (Inclusive of all taxes for {currentVariant.quantityLabel})
              </span>
            </div>

            {/* Select Size / Variant */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                Choose Pack Size / Quantity:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {product.variants.map((v, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`py-3 px-3 rounded-2xl border text-center transition-all ${
                      selectedVariantIndex === idx
                        ? "bg-herbal-800 text-white border-herbal-800 shadow-md ring-2 ring-herbal-300"
                        : "bg-white text-gray-700 border-gray-200 hover:border-herbal-400"
                    }`}
                  >
                    <span className="block text-xs font-bold">{v.quantityLabel}</span>
                    <span className="block text-[11px] font-mono opacity-90 mt-0.5">₹{v.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Counter & Add To Cart Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center justify-between border border-gray-200 rounded-full px-4 py-2.5 w-full sm:w-36 bg-gray-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-lg font-bold text-gray-600 hover:text-herbal-800 px-2"
                >
                  -
                </button>
                <span className="font-bold text-gray-900 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-lg font-bold text-gray-600 hover:text-herbal-800 px-2"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2.5 font-bold py-4 px-8 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg ${
                  added
                    ? "bg-emerald-600 text-white"
                    : "bg-herbal-800 hover:bg-herbal-900 text-white"
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" /> Add {quantity} to Shopping Cart • ₹{currentVariant.price * quantity}
                  </>
                )}
              </button>
            </div>

            {/* Best For & Directions */}
            <div className="space-y-4 pt-4 border-t border-herbal-100">
              <div className="p-4 rounded-2xl bg-herbal-50/70 border border-herbal-200 flex items-start gap-3">
                <Target className="w-5 h-5 text-herbal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-herbal-900 uppercase tracking-wider block">Best For:</span>
                  <span className="text-xs text-gray-700">{product.bestFor}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">How to Use:</span>
                  <span className="text-xs text-gray-700 leading-relaxed">{product.howToUse}</span>
                </div>
              </div>
            </div>

            {/* Key Benefits Section */}
            <div className="bg-herbal-50/70 border border-herbal-100 rounded-3xl p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-herbal-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-herbal-700" /> Key Herbal Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-herbal-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Natural Ingredients List */}
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Natural Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-white border border-herbal-200 text-herbal-800 px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5"
                  >
                    <Leaf className="w-3.5 h-3.5 text-herbal-600" /> {ing}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-herbal-100">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              More from {product.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="bg-white border border-herbal-100 rounded-3xl p-6 hover:border-herbal-300 transition-all shadow-sm">
                  <div className="h-44 rounded-2xl bg-herbal-50 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-gray-900">{rel.name}</h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1 mb-4">{rel.description}</p>
                  <Link
                    href={`/products/${rel.id}`}
                    className="inline-block w-full text-center bg-herbal-100 text-herbal-800 hover:bg-herbal-800 hover:text-white text-xs font-bold py-2.5 rounded-full transition-all"
                  >
                    View Product Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
