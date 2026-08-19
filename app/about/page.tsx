import React from "react";
import Link from "next/link";
import { 
  Leaf, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Smile, 
  ArrowRight,
  CheckCircle2,
  Users
} from "lucide-react";

export const metadata = {
  title: "About Us | Julz Herbals - Pure Natural Care",
  description: "Learn the story behind Julz Herbals — born from a belief that nature has always had a beautiful way of caring for us. Made with care, honesty, and love.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen pb-24 overflow-hidden">
      
      {/* Hero Banner Header */}
      <section className="relative bg-gradient-to-b from-herbal-50 via-herbal-50/50 to-white py-20 lg:py-28 border-b border-herbal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-herbal-200 text-herbal-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" /> The Julz Herbals Story
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Nature Has Always Had a <span className="italic text-herbal-800 underline decoration-herbal-300 decoration-wavy">Beautiful Way</span> of Caring for Us.
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            What started as a personal passion for herbal beauty and traditional care grew into a mission to bring nature's pure goodness into your family's daily self-care routine.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-white font-bold px-8 py-4 rounded-full text-sm transition-all shadow-md hover:shadow-xl"
            >
              Explore Herbal Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Decorative Floral Accents */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-herbal-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Main Story Content & Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        
        {/* Section 1: The Story Behind Julz Herbals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-herbal-700">
              <Leaf className="w-4 h-4" /> Our Origins
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              The Story Behind Julz Herbals 🌿
            </h2>

            <div className="prose prose-sm text-gray-600 space-y-4 leading-relaxed font-sans">
              <p>
                <strong className="text-gray-900 font-semibold">Julz Herbals was born from a simple belief — that nature has always had a beautiful way of caring for us.</strong>
              </p>
              <p>
                What started as a personal interest in herbal and natural beauty care gradually grew into a dream of creating products that bring the goodness of nature into everyday life.
              </p>
              <p>
                The journey began with a passion for <strong className="text-herbal-800 font-semibold">beauty, self-care, and traditional herbal ingredients</strong>. Over time, experimenting with natural ingredients, learning about their benefits, and understanding the needs of everyday families inspired us to create our own range of herbal products.
              </p>
              <p className="text-base font-serif italic text-herbal-900 border-l-4 border-herbal-600 pl-4 py-1">
                "And that is how Julz Herbals began."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-tr from-herbal-100 to-herbal-50 p-8 border border-herbal-200 shadow-lg space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-herbal-700 shadow-md">
                <Heart className="w-8 h-8 text-red-500 fill-red-100" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Made with Care, Honesty & Love
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every bottle of hair oil, jar of bath powder, and batch of baby care is handcrafted in small batches using sun-dried botanicals, cold-pressed oils, and traditional Indian herbs.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white/80 rounded-xl text-center border border-herbal-100">
                  <span className="font-serif text-xl font-bold text-herbal-900 block">100%</span>
                  <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider block">Natural Care</span>
                </div>
                <div className="p-3 bg-white/80 rounded-xl text-center border border-herbal-100">
                  <span className="font-serif text-xl font-bold text-herbal-900 block">0%</span>
                  <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider block">Harsh Toxins</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: From a Small Dream to a Growing Brand */}
        <div className="bg-herbal-50/70 border border-herbal-100 rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-herbal-700 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Our Evolution
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              From a Small Dream to a Growing Brand
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              In the beginning, Julz Herbals was simply an idea — to create herbal products that were made with care and inspired by traditional knowledge.
            </p>
          </div>

          {/* Key Question Highlight Banner */}
          <div className="bg-white border-l-4 border-herbal-800 p-6 rounded-2xl shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-herbal-800">
              With every product we developed, we focused on one question:
            </span>
            <p className="font-serif text-xl sm:text-2xl font-bold text-gray-900 italic">
              "Can we create something that people can confidently include in their everyday self-care routine?"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl border border-herbal-100 space-y-2">
              <span className="w-8 h-8 rounded-full bg-herbal-100 text-herbal-800 text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-serif text-lg font-bold text-gray-900">Expanded Range</h4>
              <p className="text-xs text-gray-600">From hair care and skin care to bath care and baby care, our product range slowly began to grow.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-herbal-100 space-y-2">
              <span className="w-8 h-8 rounded-full bg-herbal-100 text-herbal-800 text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-serif text-lg font-bold text-gray-900">Continuous Learning</h4>
              <p className="text-xs text-gray-600">Every product represents learning, experimenting, improving, and most importantly, a lot of love and care.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-herbal-100 space-y-2">
              <span className="w-8 h-8 rounded-full bg-herbal-100 text-herbal-800 text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-serif text-lg font-bold text-gray-900">Family Standard</h4>
              <p className="text-xs text-gray-600">Formulated with gentle purity safe for the whole family, from infants to elders.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Our Inspiration & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Inspiration Card */}
          <div className="bg-white border border-herbal-100 rounded-3xl p-8 space-y-4 hover:border-herbal-300 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-gray-900">
              Our Inspiration
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Nature has always been at the heart of Julz Herbals. We are inspired by traditional ingredients such as herbs, flowers, seeds, oils, and plant-based ingredients that have been part of beauty and personal-care traditions for generations.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
              Our aim is to combine this <strong className="text-gray-900">traditional herbal inspiration with modern product-making practices</strong> to create products suitable for today's lifestyle.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-herbal-100 rounded-3xl p-8 space-y-4 hover:border-herbal-300 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-herbal-50 text-herbal-700 flex items-center justify-center border border-herbal-200">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              To build a trusted herbal personal-care brand that brings the goodness of nature closer to every family and makes natural self-care simple, accessible, and enjoyable.
            </p>

            <div className="pt-4">
              <span className="text-xs font-bold text-herbal-800 uppercase tracking-widest block mb-2">Our Promise:</span>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Traditional Botanical Knowledge
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Handcrafted with Care, Honesty & Love
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Paraben & Synthetic Chemical Fillers
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Section 4: Growing With You 💚 */}
        <div className="bg-gradient-to-r from-herbal-900 to-herbal-800 text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-xl space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
            <Users className="w-10 h-10" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Growing With You 💚
          </h2>

          <p className="text-sm sm:text-base text-herbal-100 max-w-2xl mx-auto leading-relaxed">
            Julz Herbals is still growing, learning, and evolving. Every customer, every piece of feedback, and every new product teaches us something valuable. Our journey is made possible by everyone who has trusted our products and supported our small dream.
          </p>

          <div className="pt-4 max-w-xl mx-auto border-t border-white/10">
            <p className="font-serif text-2xl font-bold italic tracking-wide text-amber-200">
              "Feel More Beautiful, Naturally."
            </p>
            <span className="text-xs text-herbal-200 uppercase tracking-widest block mt-2 font-medium">
              — Julz Herbals
            </span>
          </div>

          <div className="pt-6">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-white text-herbal-900 hover:bg-herbal-100 font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-md"
            >
              Shop Our Herbal Range <Smile className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
