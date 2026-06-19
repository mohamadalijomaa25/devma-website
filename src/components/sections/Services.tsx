"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const nums = ["i.", "ii.", "iii.", "iv.", "v.", "vi.", "vii."];
const tagSets = [
  ["Design", "Code", "SEO"],
  ["Menus", "Reservations", "Local SEO"],
  ["Shopify", "WooCommerce", "Checkout"],
  ["Campaign", "Conversion", "CRO"],
  ["Audit", "Rebuild", "Refresh"],
  ["Rankings", "Traffic", "Technical"],
  ["Updates", "Security", "Hosting"],
];

export function Services() {
  const { t, locale } = useLanguage();

  const services = [
    { num: nums[0], title: t("services.s1Title"), desc: t("services.s1Desc"), tags: tagSets[0] },
    { num: nums[1], title: t("services.s2Title"), desc: t("services.s2Desc"), tags: tagSets[1] },
    { num: nums[2], title: t("services.s3Title"), desc: t("services.s3Desc"), tags: tagSets[2] },
    { num: nums[3], title: t("services.s4Title"), desc: t("services.s4Desc"), tags: tagSets[3] },
    { num: nums[4], title: t("services.s5Title"), desc: t("services.s5Desc"), tags: tagSets[4] },
    { num: nums[5], title: t("services.s6Title"), desc: t("services.s6Desc"), tags: tagSets[5] },
    { num: nums[6], title: t("services.s7Title"), desc: t("services.s7Desc"), tags: tagSets[6] },
  ];

  return (
    <section id="services" className="border-t border-border bg-background relative">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>

        {/* Header Block exactly like Portfolio */}
        <div className="mb-24 flex gap-4 items-start">
          <div className="w-[2px] h-6 bg-primary mt-1 hidden md:block"></div>
          <div>
            <div className="flex items-center gap-3 mb-4 uppercase tracking-[0.2em] text-[10px] font-bold text-muted">
               <span className="text-gradient italic font-serif text-base lowercase">i.</span> {t("services.eyebrow")}
            </div>
            
            <h2 className="text-4xl md:text-5xl tracking-tight font-serif text-foreground leading-[1.05] max-w-4xl mb-6">
              {t("services.title1")} <span className="text-gradient italic font-serif">{t("services.title2")}</span>
            </h2>
            
            <div className="text-muted text-sm md:text-base leading-relaxed max-w-xl">
              <p className="mb-2">
                {locale === "ar"
                  ? "يتم إعداد وتصميم وبرمجة كل مشروع لعميل واحد. لا يوجد شيء جاهز على الرف."
                  : "Each project is drafted, designed, and coded for one client. Nothing is pulled from a shelf."}
              </p>
            </div>
          </div>
        </div>

        {/* Services List - Editorial Layout */}
        <div className="border-t border-border mt-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row items-start gap-6 md:gap-16 py-8 md:py-10 border-b border-border hover:bg-secondary/5 transition-colors duration-500"
            >
              {/* Left col: Num + Arrow */}
              <div className="w-16 flex-shrink-0 flex flex-col gap-4 pt-1">
                <span className="text-gradient italic font-serif text-2xl">{s.num}</span>
                <span className="text-muted hidden md:block opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">&rarr;</span>
              </div>

              {/* Middle col: Title + Desc */}
              <div className="flex-grow">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl">
                  {s.desc}
                </p>
              </div>

              {/* Right col: Tags */}
              <div className="md:w-48 lg:w-64 flex-shrink-0 md:text-right pt-2">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/70 group-hover:text-muted transition-colors duration-300">
                  {s.tags.join(" · ")}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/96181440046"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors duration-300 font-bold tracking-widest uppercase text-[10px]"
          >
            <span className="w-6 h-px bg-muted group-hover:w-10 group-hover:bg-primary transition-all duration-300" />
            {t("services.discuss")}
          </a>
        </div>
      </div>
    </section>
  );
}
