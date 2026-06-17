"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Business", "Restaurant", "E-commerce", "Landing Pages"];

const projects = [
  { id: 1, num: "i.", title: "Fintech Startup", category: "Business", url: "devma.web", desc: "A credibility-first website for a financial technology company, organised around investor trust and clear product positioning." },
  { id: 2, num: "ii.", title: "Gourmet Bistro", category: "Restaurant", url: "devma.web", desc: "A restaurant site where the menu is the hero — visual, readable, and reservation-ready. Warm typography, fast on mobile." },
  { id: 3, num: "iii.", title: "Modern Apparel", category: "E-commerce", url: "devma.web", desc: "A fashion store with seamless product filtering, a visual lookbook, and a checkout that gets out of the way." },
  { id: 4, num: "iv.", title: "SaaS Platform", category: "Landing Pages", url: "devma.web", desc: "A high-converting product landing page built around one action — sign up. Animated feature showcase, zero distractions." },
  { id: 5, num: "v.", title: "Real Estate Firm", category: "Business", url: "devma.web", desc: "Property listings with advanced filtering, map integration, and the visual authority that makes buyers trust the brand." },
  { id: 6, num: "vi.", title: "Cafe & Roastery", category: "Restaurant", url: "devma.web", desc: "An artisan coffee brand site with a story-first structure. Warm, premium, and local SEO optimized." },
];

export function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = projects.filter(
    (p) => active === "All" || p.category === active
  );

  return (
    <section id="portfolio" className="border-t border-[#1e1e1e]">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow">
            <span className="text-[#3B82F6]">ii.</span> Selected work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Projects{" "}
            <span className="serif-italic" style={{color:"#3B82F6"}}>already in the world.</span>
          </h2>
          <p className="text-[#666] max-w-lg text-sm leading-relaxed">
            Each one drafted, designed, and shipped from this desk.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                active === cat
                  ? "bg-[#3B82F6] text-white"
                  : "border border-[#1e1e1e] text-[#555] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project list — text cards like Webanon */}
        <motion.div layout className="divide-y divide-[#1a1a1a]">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="group grid grid-cols-1 md:grid-cols-[60px_1fr_auto] gap-4 md:gap-8 items-center py-7 hover:bg-[#0d0d0d] transition-colors -mx-6 px-6"
              >
                <span className="text-[#3B82F6] text-sm font-mono font-bold">{p.num}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#3B82F6] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed max-w-lg">{p.desc}</p>
                  <span className="inline-block mt-2 text-xs text-[#3B82F6]/60 font-medium tracking-wider uppercase">{p.category}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#444] group-hover:text-[#888] transition-colors whitespace-nowrap">
                  <span>{p.url} →</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
