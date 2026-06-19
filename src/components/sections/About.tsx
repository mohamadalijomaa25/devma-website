"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";



export function About() {
  const { t, locale } = useLanguage();

  const rules = [
    { mark: "§ i.", sign: t("about.r1Title"), text: t("about.r1Desc") },
    { mark: "§ ii.", sign: t("about.r2Title"), text: t("about.r2Desc") },
    { mark: "§ iii.", sign: t("about.r3Title"), text: t("about.r3Desc") },
    {
      mark: "§ iv.",
      sign: locale === "ar" ? "— عن التواصل" : "— on correspondence",
      text: locale === "ar"
        ? "الكتابة إلى الاستوديو هي محادثة، وليست تذكرة دعم. الرسائل يقرأها إنسان؛ والردود تأتي في جمل، في نفس اليوم."
        : "Writing to the studio is a conversation, not a ticket. Messages are read by a person; replies come back in sentences, the same day.",
    },
  ];

  const statsData = [
    { value: "50+", label: t("about.projects") },
    { value: "99%", label: t("about.satisfaction") },
    { value: "2-4 Days", label: locale === "ar" ? "مدة التسليم" : "Typical delivery" },
    { value: "100%", label: locale === "ar" ? "متوافق مع الجوال" : "Mobile-optimized" },
  ];

  return (
    <section id="about" className="border-t border-border">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow">
            <span className="text-primary">iii.</span> {t("about.eyebrow")}
          </div>
          <h2 className="text-6xl md:text-6xl font-bold mb-5">
            {locale === "ar" ? (
              <>
                {t("about.title1")}{" "}
                <span className="serif-italic" style={{color:"#3B82F6"}}>{t("about.title2")}</span>
              </>
            ) : (
              <>
                A few studio rules,{" "}
                <span className="serif-italic" style={{color:"#3B82F6"}}>in longhand.</span>
              </>
            )}
          </h2>
          <p className="text-muted max-w-lg text-sm leading-relaxed">
            {locale === "ar"
              ? "ليس بياناً — فقط المبادئ الهادئة التي نعود إليها في كل مشروع."
              : "Not a manifesto — just the quiet principles we return to on every project. Read them the way you'd read a colophon."}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border overflow-hidden mb-14">
          {statsData.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-background px-6 py-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-xs text-muted uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Rules / Marginalia */}
        <ol className="space-y-0 divide-y divide-border">
          {rules.map((rule, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 py-7 group"
            >
              <span className="text-primary font-mono text-sm font-bold mt-0.5">{rule.mark}</span>
              <p className="text-foreground/80 text-base leading-relaxed max-w-2xl">
                {rule.text}
              </p>
              <span
                className="text-muted text-xs whitespace-nowrap md:text-right mt-1 md:mt-0"
                style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}
              >
                {rule.sign}
              </span>
            </motion.li>
          ))}
        </ol>

        <p className="mt-8 text-muted/40 text-xs border-t border-border pt-6"
          style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}>
          {locale === "ar"
            ? "* القواعد تتغير فقط حين يطرح المشروع أسئلة أفضل من القواعد ذاتها."
            : "* The rules change only when a project asks better questions than the rules."}
        </p>
      </div>
    </section>
  );
}
