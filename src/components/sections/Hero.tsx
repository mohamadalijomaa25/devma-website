"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroRailItems = [
  { label: "Available for", value: "New projects" },
  { label: "Delivery", value: "2–4 weeks" },
  { label: "Instagram", value: "@devma.web" },
  { label: "Service area", value: "Remote · Worldwide" },
];

const promises = [
  "i. Every website is built from scratch — no templates.",
  "ii. Mobile-first, fast, and conversion-focused.",
  "iii. You own the code. Fully.",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-16 overflow-hidden">
      {/* Top meta bar */}
      <div className="container mx-auto px-6 pt-10 pb-4 flex items-center justify-between border-b border-[#1e1e1e]" style={{maxWidth:"1200px"}}>
        <span className="flex items-center gap-2 text-xs text-[#555]">
          <span className="pulse-dot" />
          <em style={{fontStyle:"italic"}}>Open roster · accepting new clients</em>
        </span>
        <span className="text-xs text-[#444] hidden sm:block tracking-wider">
          No.&nbsp;01 &nbsp;·&nbsp; Est. 2024
        </span>
      </div>

      {/* Main hero body */}
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center py-16 md:py-20" style={{maxWidth:"1200px"}}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16 lg:gap-24 items-start">
          {/* Left — headline + body */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.0] mb-8"
            >
              Websites that{" "}
              <br className="hidden md:block" />
              <span
                className="serif-italic"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                convert.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[#888] text-lg max-w-xl leading-relaxed mb-4"
            >
              A studio designing and developing custom websites for businesses that want to
              stand out, build trust, and grow online.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#555] text-base mb-10"
              style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}
            >
              — the kind of work a template can't touch.
            </motion.p>

            {/* Key benefits row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mb-10 border-t border-b border-[#1e1e1e] py-6"
            >
              {[
                { strong: "2–4 Weeks", sub: "typical delivery" },
                { strong: "Custom", sub: "built from scratch" },
                { strong: "You own it", sub: "code & domain" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-white font-bold text-sm">{item.strong}</div>
                  <div className="text-[#555] text-xs mt-0.5">{item.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://wa.me/96181440046"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3B82F6] text-white text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] hover:bg-[#2563EB] transition-all duration-200"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#2a2a2a] text-[#888] text-sm font-medium rounded-full hover:text-white hover:border-[#3a3a3a] transition-all duration-200"
              >
                See our work →
              </a>
            </motion.div>
          </div>

          {/* Right — studio rail */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-0 border border-[#1e1e1e] rounded-xl overflow-hidden mt-4"
          >
            {heroRailItems.map((item, i) => (
              <div key={i} className={`px-5 py-4 ${i < heroRailItems.length - 1 ? "border-b border-[#1e1e1e]" : ""}`}>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[#444] mb-1">{item.label}</div>
                <div className="text-sm text-white font-medium">{item.value}</div>
              </div>
            ))}
          </motion.aside>
        </div>
      </div>

      {/* Bottom ribbon — house promises */}
      <div className="border-t border-[#1e1e1e] bg-[#080808]">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8" style={{maxWidth:"1200px"}}>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#444] whitespace-nowrap">Studio promises</span>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
            {promises.map((p, i) => (
              <span key={i} className="text-xs text-[#555]">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
