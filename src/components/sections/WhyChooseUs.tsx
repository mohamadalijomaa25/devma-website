"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function WhyChooseUs() {
  const { t, locale } = useLanguage();

  const reasons = [
    { mark: "i.", title: t("why.w1Title"), desc: t("why.w1Desc") },
    { mark: "ii.", title: t("why.w2Title"), desc: t("why.w2Desc") },
    { mark: "iii.", title: t("why.w3Title"), desc: t("why.w3Desc") },
    { mark: "iv.", title: t("why.w4Title"), desc: t("why.w4Desc") },
    { mark: "v.", title: t("why.w5Title"), desc: t("why.w5Desc") },
    { mark: "vi.", title: t("why.w6Title"), desc: t("why.w6Desc") },
  ];

  return (
    <section className="border-t border-border bg-secondary">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span className="pulse-dot" />
              {locale === "ar" ? "نقبل مشاريع جديدة حالياً" : "Currently accepting new clients"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("why.title1")}{" "}
              <span className="serif-italic" style={{color:"#3B82F6"}}>{t("why.title2")}</span>
            </h2>
          </div>
          <a
            href="https://wa.me/96181440046"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline whitespace-nowrap"
          >
            {t("why.startConversation")}
          </a>
        </div>

        {/* Reasons — 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-secondary hover:bg-background transition-colors p-7 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-primary font-mono text-xs font-bold mt-1 flex-shrink-0">{r.mark}</span>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
