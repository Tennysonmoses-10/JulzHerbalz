"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Leaf, RefreshCw, AlertTriangle, ShieldCheck } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught React Error:", error, errorInfo);
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-herbal-50 flex items-center justify-center p-6 text-center">
          <div className="bg-white border border-herbal-200 rounded-3xl p-8 sm:p-12 max-w-lg shadow-xl space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-herbal-100 flex items-center justify-center text-herbal-700 shadow-sm">
              <Leaf className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" /> Fallback Mode Active
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                Julz Herbals Recovery Mode
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                A temporary rendering hiccup occurred. Don't worry — your shopping cart, selected herbal products, and order data are safe.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-herbal-50 border border-herbal-100 text-xs text-herbal-800 flex items-center gap-2 text-left">
              <ShieldCheck className="w-5 h-5 text-herbal-700 shrink-0" />
              <span>Multi-layer fallback resilience system protected your session.</span>
            </div>

            <button
              onClick={this.handleReset}
              className="w-full inline-flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-white font-bold py-3.5 px-6 rounded-full text-sm transition-all shadow-md"
            >
              <RefreshCw className="w-4 h-4" /> Reload & Restore Storefront
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
