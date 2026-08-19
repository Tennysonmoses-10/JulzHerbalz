"use client";

import React, { useEffect } from "react";
import { Leaf, RefreshCw, ShieldCheck } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-herbal-50 flex items-center justify-center p-6 text-center">
      <div className="bg-white border border-herbal-200 rounded-3xl p-8 sm:p-12 max-w-lg shadow-xl space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-herbal-100 flex items-center justify-center text-herbal-700 shadow-sm">
          <Leaf className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            Julz Herbals Storefront Recovery
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            We encountered a temporary connection glitch. Your cart items and order history remain completely intact.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-herbal-50 border border-herbal-100 text-xs text-herbal-800 flex items-center gap-2 text-left">
          <ShieldCheck className="w-5 h-5 text-herbal-700 shrink-0" />
          <span>Resilient Fallback Active: Automatic reconnect in progress.</span>
        </div>

        <button
          onClick={() => reset()}
          className="w-full inline-flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-white font-bold py-3.5 px-6 rounded-full text-sm transition-all shadow-md"
        >
          <RefreshCw className="w-4 h-4" /> Retry Connection
        </button>
      </div>
    </div>
  );
}
