"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function FAQ() {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ];

  return (
    <section id="faq" className="border-t border-border">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-24">
          {/* Sticky label */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="eyebrow mb-4">
              <span className="text-primary">vi.</span> {t("faq.eyebrow")}
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {t("faq.title1")}
              <br />
              <span className="serif-italic" style={{color:"#3B82F6"}}>{t("faq.title2")}</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              {locale === "ar"
                ? "إذا كان هناك شيء مفقود، اكتب لنا — نرد في نفس اليوم."
                : "If something is missing, write to us — we reply the same day."}
            </p>
            <a href="https://wa.me/96181440046" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-xs text-primary hover:underline">
              {t("faq.ask")}
            </a>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-border">
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
                    <span className={`text-base font-semibold transition-colors ${isOpen ? "text-foreground" : "text-muted group-hover:text-foreground"}`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 text-lg font-light transition-all duration-300 mt-0.5 ${isOpen ? "text-primary rotate-45" : "text-muted rotate-0"}`}>
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
                        <p className="text-muted text-sm leading-relaxed pb-6 max-w-xl">
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
