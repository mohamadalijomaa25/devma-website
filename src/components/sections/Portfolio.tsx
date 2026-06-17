"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  { id: 1, num: "i.", titleKey: "Crispello", category: "Restaurant", categoryKey: "Restaurant", url: "crispello.online", descEn: "A complete restaurant menu and ordering system designed for seamless user experience.", descAr: "نظام قائمة طعام وطلب متكامل للمطاعم مصمم لتجربة مستخدم سلسة." },
  { id: 2, num: "ii.", titleKey: "Skill Swap", category: "Business", categoryKey: "Business", url: "skillswap.homes", descEn: "A platform built for students to exchange skills with each other without the need for money.", descAr: "منصة مبنية للطلاب لتبادل المهارات مع بعضهم البعض دون الحاجة إلى الأموال." },
];

export function Portfolio() {
  const { t, locale } = useLanguage();
  const [active, setActive] = useState("All");

  const categoriesEn = ["All", "Restaurant", "Business"];
  const categoriesAr = ["الكل", "المطاعم", "الشركات"];
  const categories = locale === "ar" ? categoriesAr : categoriesEn;

  // Map Arabic category to English for filtering
  const activeEn = locale === "ar"
    ? categoriesEn[categoriesAr.indexOf(active)] ?? "All"
    : active;

  const filtered = projects.filter(
    (p) => activeEn === "All" || p.category === activeEn
  );

  const handleCategoryClick = (cat: string) => {
    setActive(cat);
  };

  return (
    <section id="portfolio" className="border-t border-border">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow">
            <span className="text-primary">ii.</span> {t("work.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            {t("work.title1")}{" "}
            <span className="serif-italic" style={{color:"#3B82F6"}}>{t("work.title2")}</span>
          </h2>
          <p className="text-muted max-w-lg text-sm leading-relaxed">
            {locale === "ar" ? "كل مشروع مسوَّد ومصمم ومشحون من هذا المكتب." : "Each one drafted, designed, and shipped from this desk."}
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                active === cat
                  ? "bg-primary text-white"
                  : "border border-border text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project list */}
        <motion.div layout className="divide-y divide-border">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="group grid grid-cols-1 md:grid-cols-[60px_1fr_auto] gap-4 md:gap-8 items-center py-7 hover:bg-secondary transition-colors -mx-6 px-6"
              >
                <span className="text-primary text-sm font-mono font-bold">{p.num}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {p.titleKey}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-lg">
                    {locale === "ar" ? p.descAr : p.descEn}
                  </p>
                  <span className="inline-block mt-2 text-xs text-primary/60 font-medium tracking-wider uppercase">
                    {locale === "ar" ? categoriesAr[categoriesEn.indexOf(p.category)] : p.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted group-hover:text-foreground transition-colors whitespace-nowrap">
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
