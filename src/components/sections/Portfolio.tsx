"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  { 
    id: 1, 
    num: "i.", 
    titleKey: "Crispello", 
    url: "crispello.online", 
    descEn: "A complete restaurant menu and ordering system designed for seamless user experience. Resulted in a 35% increase in online takeout orders within the first month.", 
    descAr: "نظام قائمة طعام وطلب متكامل للمطاعم مصمم لتجربة مستخدم سلسة. حقق زيادة بنسبة 35٪ في طلبات الاستلام عبر الإنترنت خلال الشهر الأول."
  },
  { 
    id: 2, 
    num: "ii.", 
    titleKey: "SkillSwap", 
    url: "skillswap.homes", 
    descEn: "A platform built for students to exchange skills with each other without the need for money. Streamlined the onboarding interface, increasing active student registrations by 40%.", 
    descAr: "منصة مبنية للطلاب لتبادل المهارات مع بعضهم البعض دون الحاجة إلى الأموال. قمنا بتبسيط واجهة التسجيل، مما أدى إلى زيادة تسجيلات الطلاب النشطين بنسبة 40٪."
  },
];

export function Portfolio() {
  const { t, locale } = useLanguage();

  return (
    <section id="portfolio" className="bg-background relative border-t border-border">
      <div className="container mx-auto px-6 py-12 md:py-16" style={{maxWidth:"1200px"}}>
        
        {/* Header Block exactly like the reference */}
        <div className="mb-10 flex gap-4 items-start">
          {/* Blue line indicator from reference */}
          <div className="w-[2px] h-6 bg-primary mt-1 hidden md:block"></div>
          
          <div>
            <div className="flex items-center gap-3 mb-3 uppercase tracking-[0.2em] text-[9px] font-bold text-muted">
               <span className="text-gradient italic font-serif text-sm lowercase">ii.</span> {t("work.eyebrow")}
            </div>
            
            <h2 className="text-4xl md:text-5xl tracking-tight font-serif text-foreground leading-[1.1] max-w-4xl mb-4">
              {locale === "ar" ? "أعمالنا " : "Two pieces "}
              <span className="text-gradient italic font-serif">
                {locale === "ar" ? "الموجودة بالفعل." : "already in the world."}
              </span>
            </h2>
            
            <div className="text-muted text-sm leading-relaxed max-w-xl">
              <p className="mb-2">
                {locale === "ar" 
                  ? "قائمة قصيرة بالمواقع التي تم نشرها بالفعل — كل منها صُممت وبنيت وشُحنت من هذا المكتب." 
                  : "A short list of sites already published — each one drafted, built, and shipped from this desk."}
              </p>
              <p className="italic font-serif text-lg opacity-80">
                {locale === "ar" ? "اضغط على المشروع لفتحه في المتصفح." : "Click a line to read it in the browser."}
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-border">
          
          {projects.map((p) => (
            <a 
              href={`https://${p.url}`}
              target="_blank"
              rel="noopener noreferrer"
              key={p.id}
              className="block p-5 md:p-6 border-b lg:border-b-0 border-border lg:border-r hover:bg-secondary/10 transition-colors duration-500 group h-full flex flex-col"
            >
              <span className="text-gradient italic font-serif text-xl block mb-2">{p.num}</span>
              <h3 className="font-serif text-2xl text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                {p.titleKey}
              </h3>
              <p className="text-muted text-xs leading-[1.6] mb-6 flex-grow">
                {locale === "ar" ? p.descAr : p.descEn}
              </p>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted group-hover:text-foreground transition-colors duration-300 flex items-center gap-3">
                {p.url} <span className="text-primary text-sm">&rarr;</span>
              </div>
            </a>
          ))}

          {/* 3rd Column - Available for new work */}
          <div className="block p-5 md:p-6 border-b lg:border-b-0 border-border hover:bg-secondary/5 transition-colors duration-500 h-full flex flex-col">
            <span className="text-gradient italic font-serif text-xl block mb-2">iii.</span>
            <h3 className="font-serif text-2xl text-foreground/50 mb-2 leading-tight">
              {locale === "ar" ? "مشروعك القادم" : "Your Next Project"}
            </h3>
            <p className="text-muted/60 text-xs leading-[1.6] mb-6 flex-grow">
              {locale === "ar" 
                ? "مكان مخصص للعمل الرائع القادم. نحن نقبل حاليًا شركاء جدد مستعدين لبناء شيء استثنائي." 
                : "A reserved space for the next great piece of work. We are currently accepting new partners ready to build something exceptional."}
            </p>
            <a href="#contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-3 w-fit">
              {locale === "ar" ? "تواصل معنا" : "START A CONVERSATION"} <span className="text-primary text-sm">&rarr;</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
