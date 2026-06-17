"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  { id: 1, num: "i.", titleKey: "Fintech Startup", category: "Business", categoryKey: "Business", url: "devma.web", descEn: "A credibility-first website for a financial technology company, organised around investor trust and clear product positioning.", descAr: "موقع شركة تقنية مالية مبني على المصداقية أولاً، منظّم حول ثقة المستثمرين وتحديد المنتج بوضوح." },
  { id: 2, num: "ii.", titleKey: "Gourmet Bistro", category: "Restaurant", categoryKey: "Restaurant", url: "devma.web", descEn: "A restaurant site where the menu is the hero — visual, readable, and reservation-ready. Warm typography, fast on mobile.", descAr: "موقع مطعم يكون فيه القائمة هو البطل — مرئي وقابل للقراءة وجاهز للحجز. طباعة دافئة وسريع على الجوال." },
  { id: 3, num: "iii.", titleKey: "Modern Apparel", category: "E-commerce", categoryKey: "E-commerce", url: "devma.web", descEn: "A fashion store with seamless product filtering, a visual lookbook, and a checkout that gets out of the way.", descAr: "متجر أزياء مع تصفية سلسة للمنتجات، وكتاب صور مرئي، وعملية دفع لا تعيق المستخدم." },
  { id: 4, num: "iv.", titleKey: "SaaS Platform", category: "Landing Pages", categoryKey: "Landing Pages", url: "devma.web", descEn: "A high-converting product landing page built around one action — sign up. Animated feature showcase, zero distractions.", descAr: "صفحة هبوط عالية التحويل مبنية حول إجراء واحد — التسجيل. عرض ميزات متحرك بدون تشتيت." },
  { id: 5, num: "v.", titleKey: "Real Estate Firm", category: "Business", categoryKey: "Business", url: "devma.web", descEn: "Property listings with advanced filtering, map integration, and the visual authority that makes buyers trust the brand.", descAr: "قوائم عقارية مع تصفية متقدمة، وتكامل الخريطة، والسلطة البصرية التي تجعل المشترين يثقون بالعلامة التجارية." },
  { id: 6, num: "vi.", titleKey: "Cafe & Roastery", category: "Restaurant", categoryKey: "Restaurant", url: "devma.web", descEn: "An artisan coffee brand site with a story-first structure. Warm, premium, and local SEO optimized.", descAr: "موقع علامة قهوة حرفية بهيكل يروي القصة أولاً. دافئ وراقٍ ومُحسَّن لمحركات البحث المحلية." },
];

export function Portfolio() {
  const { t, locale } = useLanguage();
  const [active, setActive] = useState("All");

  const categoriesEn = ["All", "Business", "Restaurant", "E-commerce", "Landing Pages"];
  const categoriesAr = ["الكل", "الشركات", "المطاعم", "التجارة الإلكترونية", "صفحات الهبوط"];
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
