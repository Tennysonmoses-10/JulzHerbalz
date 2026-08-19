"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock,
  Sparkles,
  Leaf
} from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-herbal-50 via-herbal-50/50 to-white py-16 lg:py-24 border-b border-herbal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-herbal-200 text-herbal-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" /> We'd Love to Hear From You
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Get in Touch with Julz Herbals 🌿
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our traditional herbal hair oils, natural bath powders, or baby care? Reach out to us directly or drop us a message below.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-gray-900">
                Contact Information
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Connect with our team directly for product guidance, orders, or custom herbal inquiries.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/918689988753"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-herbal-50/80 border border-herbal-100 hover:border-herbal-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-herbal-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-herbal-800 block">Phone & WhatsApp</span>
                  <span className="text-base font-semibold text-gray-900 block mt-0.5">+91 86899 88753</span>
                  <span className="text-[11px] text-emerald-700 font-medium">Click to Chat on WhatsApp &rarr;</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:julzherbalproducts@gmail.com"
                className="flex items-start gap-4 p-5 rounded-2xl bg-herbal-50/80 border border-herbal-100 hover:border-herbal-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-herbal-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-herbal-800 block">Email Us</span>
                  <span className="text-sm font-semibold text-gray-900 block mt-0.5 break-all">julzherbalproducts@gmail.com</span>
                  <span className="text-[11px] text-gray-500 font-medium">We reply within 24 hours</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-herbal-50/80 border border-herbal-100">
                <div className="w-12 h-12 rounded-xl bg-herbal-800 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-herbal-800 block">Origin & Shipping</span>
                  <span className="text-sm font-semibold text-gray-900 block mt-0.5">Tamil Nadu, India</span>
                  <span className="text-[11px] text-gray-500">Shipping across India</span>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-herbal-900 to-herbal-800 text-white space-y-4 shadow-lg">
              <h3 className="font-serif text-lg font-bold flex items-center gap-2">
                <Leaf className="w-5 h-5 text-herbal-300" /> Follow Julz Herbals Online
              </h3>
              <p className="text-xs text-herbal-100 leading-relaxed">
                Stay updated with natural beauty tips, product launches, and customer reviews on our official social channels.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.instagram.com/julz_herbals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all"
                >
                  <Instagram className="w-4 h-4 text-pink-400" /> Instagram
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61576616350550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all"
                >
                  <Facebook className="w-4 h-4 text-blue-400" /> Facebook Page
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white border border-herbal-200 rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Fill out the form below and our team will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Thank you for contacting Julz Herbals. We will review your message and reply to {formData.email || "your email"} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nidhi Chaure"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-herbal-700 focus:ring-2 focus:ring-herbal-200 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="julzherbalproducts@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-herbal-700 focus:ring-2 focus:ring-herbal-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="8689988753"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-herbal-700 focus:ring-2 focus:ring-herbal-200 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Your Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your question or order inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-herbal-700 focus:ring-2 focus:ring-herbal-200 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-white font-bold py-4 px-8 rounded-full text-xs transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
