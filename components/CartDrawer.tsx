"use client";

import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useCart } from "./Providers";

export function CartDrawer() {
  const { data: session } = useSession();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  if (!isCartOpen) return null;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!session) {
      // Redirect to Google OAuth Sign In if not logged in
      signIn("google");
      return;
    }

    if (!shippingDetails.name || !shippingDetails.phone || !shippingDetails.address) {
      setErrorMsg("Please complete all shipping address fields.");
      return;
    }

    setIsCheckingOut(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: shippingDetails.name,
          customerEmail: session.user?.email || "customer@julzherbals.com",
          customerPhone: shippingDetails.phone,
          shippingAddress: shippingDetails.address,
          items: cart.map((item) => ({
            productId: item.productId,
            variantLabel: item.variantLabel,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Order placement failed");
      }

      setOrderComplete(true);
      clearCart();
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to place order. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs transition-opacity animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-herbal-100 flex items-center justify-between bg-herbal-50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-herbal-100 flex items-center justify-center text-herbal-700 font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-xl font-bold text-gray-900">Your Cart</h2>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setOrderComplete(false);
              }}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content / Order Success View */}
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            {orderComplete ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">Order Placed Successfully!</h3>
                <p className="text-sm text-gray-600">
                  Thank you for ordering from Julz Herbals. We will dispatch your handcrafted herbal products shortly.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setOrderComplete(false);
                  }}
                  className="mt-4 inline-flex items-center justify-center bg-herbal-700 text-white text-xs font-semibold px-6 py-3 rounded-full"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto" />
                <p className="text-gray-500 text-sm font-medium">Your shopping cart is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-herbal-700 bg-herbal-100 hover:bg-herbal-200 px-4 py-2 rounded-full"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 rounded-2xl bg-herbal-50/50 border border-herbal-100"
                  >
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                      <p className="text-xs text-herbal-700 font-medium">Size: {item.variantLabel}</p>
                      <p className="text-xs font-bold font-mono text-gray-900">₹{item.price * item.quantity}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-herbal-200 rounded-lg bg-white overflow-hidden text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 text-gray-600 hover:bg-herbal-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 text-gray-600 hover:bg-herbal-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Shipping Details Form */}
                <div className="pt-4 border-t border-herbal-100 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Shipping & Delivery Details:
                  </h4>
                  {errorMsg && <p className="text-xs font-semibold text-red-600 bg-red-50 p-2 rounded-lg">{errorMsg}</p>}
                  
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={shippingDetails.name}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-herbal-600"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (10 digits)"
                    value={shippingDetails.phone}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, phone: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-herbal-600"
                    required
                  />
                  <textarea
                    placeholder="Complete Delivery Address"
                    value={shippingDetails.address}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-herbal-600 h-20"
                    required
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout Action */}
          {cart.length > 0 && !orderComplete && (
            <div className="p-6 border-t border-herbal-100 bg-herbal-50 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 font-medium">Subtotal</span>
                <span className="font-serif text-2xl font-bold text-herbal-900">₹{totalPrice}</span>
              </div>

              {!session ? (
                <div className="space-y-2">
                  <p className="text-[11px] text-herbal-800 bg-herbal-100 p-2 rounded-lg text-center font-medium">
                    Google Sign-In required to confirm and track your order.
                  </p>
                  <button
                    onClick={() => signIn("google")}
                    className="w-full inline-flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-white font-semibold py-3.5 rounded-full text-xs transition-all shadow-md"
                  >
                    Login with Google to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handlePlaceOrder}
                  disabled={isCheckingOut}
                  className="w-full inline-flex items-center justify-center gap-2 bg-herbal-700 hover:bg-herbal-800 text-white font-semibold py-3.5 rounded-full text-xs transition-all shadow-md disabled:opacity-50"
                >
                  {isCheckingOut ? "Processing Order..." : `Confirm Order (₹${totalPrice})`}
                  <ShieldCheck className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
