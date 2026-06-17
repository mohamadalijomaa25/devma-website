"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "How long does a website take to build?", answer: "A standard business website typically takes 2–4 weeks from discovery to launch. More complex projects like custom e-commerce stores or backend systems can take 6–10 weeks. We give you a precise timeline after the first conversation." },
  { question: "What is included in the website design?", answer: "Our packages include custom design, mobile-responsive development, on-page SEO setup, content integration, contact forms, Google Analytics, and a 30-day post-launch support window. Everything it takes to go live with confidence." },
  { question: "Do you provide hosting and domain registration?", answer: "We offer premium managed hosting as part of our maintenance plans. If you prefer your own hosting provider, we can deploy there. Domains are typically held by the client — so you own everything, always." },
  { question: "Can you redesign my existing website?", answer: "Yes. Redesigns are one of our most requested services. We start with an audit of your current site, identify what's holding you back, and rebuild from scratch with a cleaner structure and better conversion flow." },
  { question: "Do you offer website maintenance plans?", answer: "Yes. Our maintenance plans cover software updates, security monitoring, regular backups, speed checks, and content updates. A website is not a one-time product — we keep it sharp." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-[#1e1e1e]">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-24">
          {/* Sticky label */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="eyebrow mb-4">
              <span className="text-[#3B82F6]">vi.</span> Questions
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Frequently asked,
              <br />
              <span className="serif-italic" style={{color:"#3B82F6"}}>plainly answered.</span>
            </h2>
            <p className="text-[#555] text-sm leading-relaxed">
              If something is missing, write to us — we reply the same day.
            </p>
            <a href="https://wa.me/96181440046" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-xs text-[#3B82F6] hover:underline">
              Ask a question →
            </a>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-[#1a1a1a]">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left focus:outline-none group"
                  >
                    <span className={`text-base font-semibold transition-colors ${isOpen ? "text-white" : "text-[#999] group-hover:text-white"}`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 text-lg font-light transition-all duration-300 mt-0.5 ${isOpen ? "text-[#3B82F6] rotate-45" : "text-[#444] rotate-0"}`}>
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#666] text-sm leading-relaxed pb-6 max-w-xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
