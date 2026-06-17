"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, FileText, PenTool, Code, Rocket, Headphones } from "lucide-react";

const steps = [
  { num: "01", icon: Search, title: "Discovery", sub: "listening first", desc: "We learn about your business, goals, target audience, and the one thing that sets you apart. This conversation shapes everything." },
  { num: "02", icon: FileText, title: "Planning", sub: "structure before design", desc: "A strategic sitemap and content plan — so we know exactly what each page needs to say before we touch a pixel." },
  { num: "03", icon: PenTool, title: "Design", sub: "every pixel intentional", desc: "Custom visual design tailored to your brand. Typography, spacing, colour — refined until it feels right." },
  { num: "04", icon: Code, title: "Development", sub: "clean code, fast sites", desc: "Coded by hand. No page builders. Fast, semantic, and built to last — the kind of code you can hand off and build on." },
  { num: "05", icon: Rocket, title: "Launch", sub: "shipped, not handed off", desc: "Rigorous QA, device testing, and a live deployment. We don't hand you the keys and disappear." },
  { num: "06", icon: Headphones, title: "Support", sub: "we stay in the room", desc: "Ongoing maintenance, updates, and growth support. A website is not a one-time project — it's an ongoing relationship." },
];

export function Process() {
  return (
    <section id="process" className="border-t border-[#1e1e1e]">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow">
            <span className="text-[#3B82F6]">iv.</span> How the studio works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            The process,{" "}
            <span
              className="serif-italic"
              style={{color:"#3B82F6"}}
            >
              step by step.
            </span>
          </h2>
          <p className="text-[#666] max-w-lg text-sm leading-relaxed">
            A streamlined, transparent workflow designed to keep you in the loop and deliver exceptional results — on time, every time.
          </p>
        </div>

        {/* Steps — numbered list rows */}
        <div className="divide-y divide-[#1a1a1a]">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group grid grid-cols-1 md:grid-cols-[60px_160px_1fr] gap-4 md:gap-8 items-start py-7 hover:bg-[#0d0d0d] transition-colors -mx-6 px-6"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 md:block">
                <span className="text-[#3B82F6] font-mono text-sm font-bold">{step.num}</span>
              </div>

              {/* Title + subtitle */}
              <div>
                <h3 className="text-base font-bold text-white mb-0.5">{step.title}</h3>
                <span
                  className="text-xs text-[#444]"
                  style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}
                >
                  {step.sub}
                </span>
              </div>

              {/* Description + icon */}
              <div className="flex items-start gap-4">
                <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#111] border border-[#1e1e1e] flex items-center justify-center text-[#444] group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-all">
                  <step.icon className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
