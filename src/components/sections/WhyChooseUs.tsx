"use client";

import React from "react";
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
    <section className="border-t border-border bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10" style={{maxWidth:"1200px"}}>
        
        {/* Editorial Header */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          <div className="flex gap-4 items-start max-w-4xl">
            <div className="w-[2px] h-6 bg-primary mt-1 hidden md:block"></div>
            <div>
              <div className="flex items-center gap-3 mb-8 uppercase tracking-[0.2em] text-[10px] font-bold text-muted">
                <span className="text-gradient italic font-serif text-base lowercase">iii.</span> 
                {locale === "ar" ? "قواعدنا" : "The standard"}
              </div>
              
              <h2 className="text-5xl md:text-[5.5rem] tracking-tight font-serif text-foreground leading-[1.05] mb-6">
                {t("why.title1")}{" "}
                <span className="text-gradient italic font-serif">{t("why.title2")}</span>
                {locale === "ar" ? "؟" : "?"}
              </h2>
            </div>
          </div>

          <div className="pb-2">
            <a
              href="https://wa.me/96181440046"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-300"
            >
              <span className="w-6 h-px bg-muted group-hover:w-10 group-hover:bg-primary transition-all duration-300" />
              {t("why.startConversation")}
            </a>
          </div>

        </div>

        {/* Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group relative p-10 md:p-12 border-b border-r border-border hover:bg-secondary/5 transition-colors duration-500 flex flex-col h-full"
            >
              <span className="text-gradient italic font-serif text-2xl block mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                {r.mark}
              </span>
              
              <h3 className="font-serif text-3xl md:text-[2rem] text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                {r.title}
              </h3>
              
              <p className="text-muted text-sm leading-[1.8] flex-grow">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
