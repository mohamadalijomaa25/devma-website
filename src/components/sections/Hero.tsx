"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { locale, t } = useLanguage();
  const [timeString, setTimeString] = useState("");

  // Update Beirut time
  useEffect(() => {
    const updateTime = () => {
      const beirutTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Beirut",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setTimeString(beirutTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden border-b border-border bg-background">
      <div className="container mx-auto px-6" style={{maxWidth:"1300px"}}>
        
        {/* Massive Headline */}
        <div className="mb-12 md:mb-20">
          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] tracking-tight leading-[0.9] font-serif text-foreground ml-[-0.05em]">
            {locale === "ar" ? (
              <>
                <span className="text-gradient italic font-serif pr-2">مواقع</span>
                <br />
                تُحقق نتائج.
              </>
            ) : (
              <>
                <span className="text-foreground">websites that</span>
                <br />
                <span className="text-gradient italic font-serif">convert.</span>
              </>
            )}
          </h1>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-32 items-start">
          
          {/* Left Column (Main Info) */}
          <div className="max-w-2xl">
            <h2 className="text-[1.5rem] md:text-[1.8rem] font-serif text-foreground leading-[1.4] mb-8">
              {locale === "ar" 
                ? "نصمم ونبني مواقع إلكترونية احترافية تركز على المبيعات لترفع من قيمة أعمالك."
                : "We design and build premium, conversion-focused websites that elevate your business."}
            </h2>
            
            <p className="text-muted/80 text-lg md:text-xl font-serif italic mb-12">
              {locale === "ar" 
                ? "— لا نستخدم القوالب الجاهزة. لا نقبل المساومة على الجودة."
                : "— No templates. No compromises."}
            </p>

            {/* List with horizontal rules */}
            <div className="border-t border-border flex flex-col mb-12">
              
              {/* Row 1 */}
              <div className="py-4 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                <div className="flex items-center gap-6">
                  <span className="text-gradient italic font-serif text-xl w-6">i</span>
                  <span className="text-foreground text-lg">{locale === "ar" ? "أسبوعين" : "Two weeks"}</span>
                </div>
                <span className="text-muted text-sm tracking-wide">
                  {locale === "ar" ? "التسليم النموذجي، الإطلاق مشمول" : "typical delivery, launch included"}
                </span>
              </div>

              {/* Row 2 */}
              <div className="py-4 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                <div className="flex items-center gap-6">
                  <span className="text-gradient italic font-serif text-xl w-6">ii</span>
                  <span className="text-foreground text-lg">{locale === "ar" ? "50$ للبدء" : "$50 to begin"}</span>
                </div>
                <span className="text-muted text-sm tracking-wide">
                  {locale === "ar" ? "تدفع مرة واحدة، لا رسوم شهرية" : "one-time, no monthly fees"}
                </span>
              </div>

              {/* Row 3 */}
              <div className="py-4 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                <div className="flex items-center gap-6">
                  <span className="text-gradient italic font-serif text-xl w-6">iii</span>
                  <span className="text-foreground text-lg">{locale === "ar" ? "استضافة، مدى الحياة" : "Hosting, for life"}</span>
                </div>
                <span className="text-muted text-sm tracking-wide">
                  {locale === "ar" ? "نحن نبقيه متاحاً، وأنت تملك الكود" : "we keep it live, you own the code"}
                </span>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex items-center gap-8">
              <a 
                href="https://wa.me/96181440046" 
                target="_blank" 
                rel="noreferrer"
                className="bg-foreground text-background px-8 py-4 text-sm font-bold tracking-wider hover:bg-primary hover:text-white transition-colors duration-300"
              >
                {locale === "ar" ? "ابدأ مشروعك →" : "Start a project →"}
              </a>
              <a 
                href="#services"
                className="text-foreground text-sm font-medium border-b border-border hover:border-foreground pb-1 transition-colors duration-300"
              >
                {locale === "ar" ? "انظر التكلفة →" : "See what it costs →"}
              </a>
            </div>
          </div>

          {/* Right Column (Sidebar details) */}
          <aside className="hidden lg:flex flex-col gap-8 pt-2 lg:border-l lg:border-border lg:pl-12">
            
            {/* Availability */}
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-3">
                {t("hero.available")}
              </div>
              <div className="text-3xl font-serif text-foreground mb-2 leading-none mt-1">
                {t("hero.newProjects")}
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted">
                {t("hero.delivery")} · {t("hero.weeks")}
              </div>
            </div>

            {/* Location */}
            <div className="border-t border-border pt-6">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-3">
                {t("hero.location")}
              </div>
              <div className="text-gradient italic font-serif text-[1.35rem] leading-tight">
                {t("hero.worldwide")}
              </div>
            </div>

            {/* Instagram */}
            <div className="border-t border-border pt-6">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-3">
                Instagram
              </div>
              <a href="https://instagram.com/devma.web" target="_blank" rel="noreferrer" className="text-foreground font-serif text-[1.35rem] hover:text-primary transition-colors">
                @devma.web
              </a>
            </div>

            {/* Index */}
            <div className="border-t border-border pt-6">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-3">
                {locale === "ar" ? "الفهرس" : "Index"}
              </div>
              <div className="text-foreground font-serif text-lg tracking-wide leading-relaxed">
                <a href="#services" className="hover:text-primary transition-colors">{t("nav.services")}</a>
                <span className="mx-2 opacity-50">·</span>
                <a href="#portfolio" className="hover:text-primary transition-colors">{t("nav.work")}</a>
                <span className="mx-2 opacity-50">·</span>
                <a href="#process" className="hover:text-primary transition-colors">{t("nav.process")}</a>
                <span className="mx-2 opacity-50">·</span>
                <a href="#contact" className="hover:text-primary transition-colors">{t("nav.contact")}</a>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}
