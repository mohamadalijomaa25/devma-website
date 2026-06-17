"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const testimonialsData = [
  {
    id: 1,
    quoteEn: "DEVMA transformed our online presence completely. The new website looks stunning and has increased our lead generation by 150% in just two months. It paid for itself in the first week.",
    quoteAr: "حوّل DEVMA حضورنا الرقمي بالكامل. يبدو الموقع الجديد رائعاً وزاد من توليد العملاء المحتملين بنسبة 150% في غضون شهرين فقط. عوّض تكلفته في الأسبوع الأول.",
    name: "Sarah Jenkins",
    role: "CEO, TechNova",
    initials: "SJ",
    color: "#3B82F6",
  },
  {
    id: 2,
    quoteEn: "Working with the DEVMA team was seamless. They understood our brand vision perfectly and delivered an e-commerce site that exceeded every expectation. Conversion rate is up 40%.",
    quoteAr: "العمل مع فريق DEVMA كان سلساً تماماً. فهموا رؤية علامتنا التجارية بشكل مثالي وقدّموا موقع تجارة إلكترونية فاق كل التوقعات. ارتفع معدل التحويل بنسبة 40%.",
    name: "Marcus Chen",
    role: "Founder, Peak Roasters",
    initials: "MC",
    color: "#10b981",
  },
  {
    id: 3,
    quoteEn: "The level of professionalism and design expertise at DEVMA is unmatched. Our new property listings site is the best in our local market. Clients tell us it was the first thing that made them trust us.",
    quoteAr: "مستوى الاحترافية وخبرة التصميم في DEVMA لا مثيل له. موقع قوائم العقارات الجديد لدينا هو الأفضل في سوقنا المحلي. يخبرنا العملاء أنه أول ما جعلهم يثقون بنا.",
    name: "Elena Rodriguez",
    role: "Director, Elevate Real Estate",
    initials: "ER",
    color: "#f59e0b",
  },
];

export function Testimonials() {
  const { locale, t } = useLanguage();
  const [idx, setIdx] = useState(0);
  const current = testimonialsData[idx];

  return (
    <section className="border-t border-border">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        <div className="eyebrow mb-10">
          <span className="text-primary">v.</span> {t("testimonials.eyebrow")}
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
                className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-8"
                style={{fontFamily:"var(--font-outfit), 'Outfit', sans-serif"}}
              >
                <span className="text-primary text-5xl leading-none" style={{fontFamily:"Georgia, serif"}}>&ldquo;</span>
                <br />
                {locale === "ar" ? current.quoteAr : current.quoteEn}
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
                  style={{ backgroundColor: current.color }}
                >
                  {current.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{current.name}</div>
                  <div className="text-xs text-primary">{current.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation cards */}
          <div className="flex flex-col gap-2">
            {testimonialsData.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setIdx(i)}
                className={`text-left px-5 py-4 rounded-xl border transition-all ${
                  i === idx
                    ? "border-primary/40 bg-secondary shadow-[0_0_16px_rgba(59,130,246,0.1)]"
                    : "border-border hover:border-muted bg-transparent"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{backgroundColor: item.color}}>{item.initials}</div>
                  <span className={`text-xs font-semibold ${i === idx ? "text-foreground" : "text-muted"}`}>{item.name}</span>
                </div>
                <p className={`text-[11px] leading-relaxed line-clamp-2 ${i === idx ? "text-muted" : "text-muted/50"}`}>
                  {locale === "ar" ? item.quoteAr : item.quoteEn}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
