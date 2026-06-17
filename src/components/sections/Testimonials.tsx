"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "DEVMA transformed our online presence completely. The new website looks stunning and has increased our lead generation by 150% in just two months. It paid for itself in the first week.",
    name: "Sarah Jenkins",
    role: "CEO, TechNova",
    initials: "SJ",
    color: "#3B82F6",
  },
  {
    id: 2,
    quote: "Working with the DEVMA team was seamless. They understood our brand vision perfectly and delivered an e-commerce site that exceeded every expectation. Conversion rate is up 40%.",
    name: "Marcus Chen",
    role: "Founder, Peak Roasters",
    initials: "MC",
    color: "#10b981",
  },
  {
    id: 3,
    quote: "The level of professionalism and design expertise at DEVMA is unmatched. Our new property listings site is the best in our local market. Clients tell us it was the first thing that made them trust us.",
    name: "Elena Rodriguez",
    role: "Director, Elevate Real Estate",
    initials: "ER",
    color: "#f59e0b",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="border-t border-[#1e1e1e]">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        <div className="eyebrow mb-10">
          <span className="text-[#3B82F6]">v.</span> Clients, in their words
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
          {/* Quote */}
          <div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-white leading-tight mb-8"
                style={{fontFamily:"var(--font-outfit), 'Outfit', sans-serif"}}
              >
                <span className="text-[#3B82F6] text-5xl leading-none" style={{fontFamily:"Georgia, serif"}}>&ldquo;</span>
                <br />
                {t.quote}
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${idx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#3B82F6]">{t.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation cards */}
          <div className="flex flex-col gap-2">
            {testimonials.map((t2, i) => (
              <button
                key={t2.id}
                onClick={() => setIdx(i)}
                className={`text-left px-5 py-4 rounded-xl border transition-all ${
                  i === idx
                    ? "border-[#3B82F6]/40 bg-[#111] shadow-[0_0_16px_rgba(59,130,246,0.1)]"
                    : "border-[#1a1a1a] hover:border-[#2a2a2a] bg-transparent"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{backgroundColor: t2.color}}>{t2.initials}</div>
                  <span className={`text-xs font-semibold ${i === idx ? "text-white" : "text-[#555]"}`}>{t2.name}</span>
                </div>
                <p className={`text-[11px] leading-relaxed line-clamp-2 ${i === idx ? "text-[#888]" : "text-[#333]"}`}>{t2.quote}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
