"use client";

import React from "react";
import { motion } from "framer-motion";

const rules = [
  {
    mark: "§ i.",
    sign: "— on the craft",
    text: "Every website is written from the first line. No templates are opened, no page builders are installed, no starter kits are cloned. Each project begins with a blank file.",
  },
  {
    mark: "§ ii.",
    sign: "— on the work",
    text: "A website should feel like a room, not a retail aisle. Typography before effects, rhythm before animation, substance before polish.",
  },
  {
    mark: "§ iii.",
    sign: "— on results",
    text: "We measure success in conversions, not compliments. A beautiful site that doesn't bring in clients is just decoration.",
  },
  {
    mark: "§ iv.",
    sign: "— on correspondence",
    text: "Writing to the studio is a conversation, not a ticket. Messages are read by a person; replies come back in sentences, the same day.",
  },
];

const stats = [
  { value: "150+", label: "Projects shipped" },
  { value: "99%", label: "Client retention" },
  { value: "2–4w", label: "Typical delivery" },
  { value: "100%", label: "Mobile-optimized" },
];

export function About() {
  return (
    <section id="about" className="border-t border-[#1e1e1e]">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow">
            <span className="text-[#3B82F6]">iii.</span> Marginalia
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            A few studio rules,{" "}
            <span className="serif-italic" style={{color:"#3B82F6"}}>in longhand.</span>
          </h2>
          <p className="text-[#666] max-w-lg text-sm leading-relaxed">
            Not a manifesto — just the quiet principles we return to on every project. Read them the way you'd read a colophon.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] border border-[#1a1a1a] rounded-xl overflow-hidden mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-[#0A0A0A] px-6 py-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-xs text-[#555] uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Rules / Marginalia */}
        <ol className="space-y-0 divide-y divide-[#1a1a1a]">
          {rules.map((rule, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 py-7 group"
            >
              <span className="text-[#3B82F6] font-mono text-sm font-bold mt-0.5">{rule.mark}</span>
              <p className="text-[#CCCCCC] text-base leading-relaxed max-w-2xl">
                {rule.text}
              </p>
              <span
                className="text-[#333] text-xs whitespace-nowrap md:text-right mt-1 md:mt-0"
                style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}
              >
                {rule.sign}
              </span>
            </motion.li>
          ))}
        </ol>

        <p className="mt-8 text-[#333] text-xs border-t border-[#1a1a1a] pt-6"
          style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}>
          * The rules change only when a project asks better questions than the rules.
        </p>
      </div>
    </section>
  );
}
