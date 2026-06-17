"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t, locale } = useLanguage();

  const heroRailItems = [
    { label: t("hero.available"), value: t("hero.newProjects") },
    { label: t("hero.delivery"), value: t("hero.weeks") },
    { label: t("hero.location"), value: t("hero.worldwide") },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-16 overflow-hidden">
      {/* Top meta bar */}
      <div className="container mx-auto px-6 pt-10 pb-4 flex items-center justify-between border-b border-border" style={{maxWidth:"1200px"}}>
        <span className="flex items-center gap-2 text-xs text-muted">
          <span className="pulse-dot" />
          <em style={{fontStyle:"italic"}}>Open roster · accepting new clients</em>
        </span>
        <span className="text-xs text-muted hidden sm:block tracking-wider">
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
              {locale === "ar" ? (
                <>
                  <span
                    className="serif-italic"
                    style={{
                      background: "linear-gradient(135deg, #3B82F6 0%, #60a5fa 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    مواقع
                  </span>{" "}
                  تُحقق نتائج.
                </>
              ) : (
                <>
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
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted text-lg max-w-xl leading-relaxed mb-4"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-muted/60 text-base mb-10"
              style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}
            >
              {locale === "ar" ? "— النوع من العمل الذي لا تستطيع القوالب لمسه." : "— the kind of work a template can't touch."}
            </motion.p>

            {/* Key benefits row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mb-10 border-t border-b border-border py-6"
            >
              {[
                { strong: t("hero.weeks"), sub: locale === "ar" ? "مدة التسليم" : "typical delivery" },
                { strong: locale === "ar" ? "مخصص" : "Custom", sub: locale === "ar" ? "بناء من الصفر" : "built from scratch" },
                { strong: locale === "ar" ? "أنت تملكه" : "You own it", sub: locale === "ar" ? "الكود والنطاق" : "code & domain" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-foreground font-bold text-sm">{item.strong}</div>
                  <div className="text-muted text-xs mt-0.5">{item.sub}</div>
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] hover:bg-blue-700 transition-all duration-200"
              >
                {t("hero.startProject")} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-muted text-sm font-medium rounded-full hover:text-foreground hover:border-muted transition-all duration-200"
              >
                {locale === "ar" ? "استعرض أعمالنا →" : "See our work →"}
              </a>
            </motion.div>
          </div>

          {/* Right — studio rail */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-0 border border-border rounded-xl overflow-hidden mt-4"
          >
            {heroRailItems.map((item, i) => (
              <div key={i} className={`px-5 py-4 ${i < heroRailItems.length - 1 ? "border-b border-border" : ""}`}>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">{item.label}</div>
                <div className="text-sm text-foreground font-medium">{item.value}</div>
              </div>
            ))}
            <div className="px-5 py-4 border-t border-border">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">Instagram</div>
              <div className="text-sm text-foreground font-medium">@devma.web</div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Bottom ribbon — house promises */}
      <div className="border-t border-border bg-secondary">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8" style={{maxWidth:"1200px"}}>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted whitespace-nowrap">
            {locale === "ar" ? "تعهدات الاستوديو" : "Studio promises"}
          </span>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
            {(locale === "ar"
              ? ["i. كل موقع يُبنى من الصفر — لا قوالب.", "ii. الجوال أولاً، سريع، ويركّز على التحويل.", "iii. أنت تملك الكود. بالكامل."]
              : ["i. Every website is built from scratch — no templates.", "ii. Mobile-first, fast, and conversion-focused.", "iii. You own the code. Fully."]
            ).map((p, i) => (
              <span key={i} className="text-xs text-muted">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
