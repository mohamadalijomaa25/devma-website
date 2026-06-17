"use client";

import React from "react";
import { motion } from "framer-motion";

const reasons = [
  { mark: "i.", title: "Built from scratch", desc: "No templates. No page builders. Every line of code is written for your project specifically — so it loads fast and does exactly what you need." },
  { mark: "ii.", title: "Conversion-first", desc: "Beautiful sites that don't convert are expensive decorations. We design for results — layouts, copy, and CTAs that guide visitors to act." },
  { mark: "iii.", title: "Mobile-first, always", desc: "Over 60% of web traffic is mobile. We design from the smallest screen up, so your site works flawlessly everywhere." },
  { mark: "iv.", title: "SEO-ready out of the box", desc: "Every website ships with proper semantic markup, page speed optimizations, and meta structure — so Google can find you from day one." },
  { mark: "v.", title: "You own everything", desc: "Your code, your domain, your content. We hand it all over on launch day. No lock-in, no monthly ransom." },
  { mark: "vi.", title: "Long-term partnership", desc: "We don't disappear after launch. We offer maintenance, updates, and growth support — because the best client relationships are the lasting ones." },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-[#1e1e1e] bg-[#060606]">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span className="pulse-dot" />
              Currently accepting new clients
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why work with{" "}
              <span className="serif-italic" style={{color:"#3B82F6"}}>DEVMA.</span>
            </h2>
          </div>
          <a
            href="https://wa.me/96181440046"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#3B82F6] hover:underline whitespace-nowrap"
          >
            Start a conversation →
          </a>
        </div>

        {/* Reasons — 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a] rounded-xl overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#060606] hover:bg-[#0d0d0d] transition-colors p-7 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#3B82F6] font-mono text-xs font-bold mt-1 flex-shrink-0">{r.mark}</span>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
