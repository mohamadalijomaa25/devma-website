"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Search, FileText, PenTool, Code, Rocket, Headphones } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Search, FileText, PenTool, Code, Rocket, Headphones];

export function Process() {
  const { t, locale } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the timeline itself
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // SVG Line height animation
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

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
    <section id="process" className="border-t border-border bg-background relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 py-24 md:py-40 relative z-10" style={{maxWidth:"1000px"}}>
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="eyebrow justify-center mb-6">
            <span className="text-primary">iv.</span> {t("process.eyebrow")}
          </div>
          <h2 className="text-6xl md:text-6xl font-bold mb-6 tracking-tight">
            {t("process.title1")}{" "}
            <span className="serif-italic text-gradient">{t("process.title2")}</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {locale === "ar"
              ? "سير عمل مبسّط وشفاف مصمم لإبقائك على اطلاع وتحقيق نتائج استثنائية — في الوقت المحدد، في كل مرة."
              : "A streamlined, transparent workflow designed to keep you in the loop and deliver exceptional results — on time, every time."}
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative pl-8 md:pl-0" ref={timelineRef}>
          
          {/* Vertical Line (Background) */}
          <div className="absolute left-8 md:left-1/2 md:-ml-px top-0 bottom-0 w-px bg-white/5" />
          
          {/* Vertical Line (Animated Progress) */}
          <motion.div 
            className="absolute left-8 md:left-1/2 md:-ml-px top-0 w-px bg-primary  origin-top"
            style={{ height: lineHeight }}
          />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, i) => {
              // Calculate when this specific step should activate based on total steps
              const stepActivationPoint = i / (steps.length - 1);
              const isEven = i % 2 === 0;
              
              // Create a custom transform for each step's opacity and scale based on scroll
              // It lights up when the scroll line reaches it
              const stepProgress = useTransform(
                smoothProgress,
                [Math.max(0, stepActivationPoint - 0.15), stepActivationPoint],
                [0.4, 1]
              );
              
              const stepScale = useTransform(
                smoothProgress,
                [Math.max(0, stepActivationPoint - 0.15), stepActivationPoint],
                [0.95, 1]
              );

              const dotColor = useTransform(
                smoothProgress,
                [Math.max(0, stepActivationPoint - 0.1), stepActivationPoint],
                ["rgba(255, 255, 255, 0.1)", "rgba(59, 130, 246, 1)"]
              );

              const dotGlow = useTransform(
                smoothProgress,
                [Math.max(0, stepActivationPoint - 0.1), stepActivationPoint],
                ["0px 0px 0px rgba(59,130,246,0)", "0px 0px 20px rgba(59,130,246,0.8)"]
              );

              return (
                <div key={i} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  
                  {/* The Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-none border-2 border-background z-20 flex items-center justify-center bg-background">
                    <motion.div 
                      className="w-full h-full"
                      style={{ backgroundColor: dotColor, boxShadow: dotGlow }}
                    />
                  </div>

                  {/* Content Container */}
                  <motion.div 
                    className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                    style={{ opacity: stepProgress, scale: stepScale }}
                  >
                    <div className={`glass-panel border border-white/5 p-8 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500`}>
                      
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Step Header */}
                      <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 bg-secondary border border-white/5 flex items-center justify-center text-primary  flex-shrink-0">
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-primary font-mono text-xs font-bold mb-1 tracking-widest">{step.num}</div>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                      </div>

                      {/* Step Body */}
                      <p className="text-muted text-sm leading-relaxed mb-4">
                        {step.desc}
                      </p>
                      <span
                        className="text-xs text-muted/60"
                        style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}
                      >
                        {step.sub}
                      </span>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
