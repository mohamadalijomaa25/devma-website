"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, FileText, PenTool, Code, Rocket, Headphones } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Search, FileText, PenTool, Code, Rocket, Headphones];

export function Process() {
  const { t, locale } = useLanguage();

  const steps = [
    { num: "01", icon: icons[0], title: t("process.p1Title"), sub: t("process.p1Desc"), desc: t("process.p1Text") },
    { num: "02", icon: icons[1], title: t("process.p2Title"), sub: t("process.p2Desc"), desc: t("process.p2Text") },
    { num: "03", icon: icons[2], title: t("process.p3Title"), sub: t("process.p3Desc"), desc: t("process.p3Text") },
    { num: "04", icon: icons[3], title: t("process.p4Title"), sub: t("process.p4Desc"), desc: t("process.p4Text") },
    {
      num: "05", icon: icons[4],
      title: locale === "ar" ? "الإطلاق" : "Launch",
      sub: locale === "ar" ? "البث المباشر" : "shipped, not handed off",
      desc: locale === "ar"
        ? "اختبارات صارمة عبر جميع الأجهزة ونشر مباشر. لا نسلمك المفاتيح ونختفي."
        : "Rigorous QA, device testing, and a live deployment. We don't hand you the keys and disappear.",
    },
    {
      num: "06", icon: icons[5],
      title: locale === "ar" ? "الدعم" : "Support",
      sub: locale === "ar" ? "نبقى في الصورة" : "we stay in the room",
      desc: locale === "ar"
        ? "صيانة مستمرة وتحديثات ودعم للنمو. الموقع ليس مشروعاً لمرة واحدة — إنه علاقة مستمرة."
        : "Ongoing maintenance, updates, and growth support. A website is not a one-time project — it's an ongoing relationship.",
    },
  ];

  return (
    <section id="process" className="border-t border-border">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow">
            <span className="text-primary">iv.</span> {t("process.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            {t("process.title1")}{" "}
            <span className="serif-italic" style={{color:"#3B82F6"}}>{t("process.title2")}</span>
          </h2>
          <p className="text-muted max-w-lg text-sm leading-relaxed">
            {locale === "ar"
              ? "سير عمل مبسّط وشفاف مصمم لإبقائك على اطلاع وتحقيق نتائج استثنائية — في الوقت المحدد، في كل مرة."
              : "A streamlined, transparent workflow designed to keep you in the loop and deliver exceptional results — on time, every time."}
          </p>
        </div>

        {/* Steps */}
        <div className="divide-y divide-border">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group grid grid-cols-1 md:grid-cols-[60px_160px_1fr] gap-4 md:gap-8 items-start py-7 hover:bg-secondary transition-colors -mx-6 px-6"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 md:block">
                <span className="text-primary font-mono text-sm font-bold">{step.num}</span>
              </div>

              {/* Title + subtitle */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-0.5">{step.title}</h3>
                <span
                  className="text-xs text-muted"
                  style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}
                >
                  {step.sub}
                </span>
              </div>

              {/* Description + icon */}
              <div className="flex items-start gap-4">
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/30 transition-all">
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
