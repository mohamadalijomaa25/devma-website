"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t, locale } = useLanguage();

  const contactItems = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: locale === "ar" ? "البريد الإلكتروني" : "Email",
      value: "devma.web.lb@gmail.com",
      href: "mailto:devma.web.lb@gmail.com",
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      label: locale === "ar" ? "إنستغرام" : "Instagram",
      value: "@devma.web",
      href: "https://instagram.com/devma.web",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: locale === "ar" ? "الموقع" : "Location",
      value: locale === "ar" ? "عن بعد · حول العالم" : "Remote · Worldwide",
      href: null,
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      label: locale === "ar" ? "واتساب" : "WhatsApp",
      value: "+961 81 440 046",
      href: "https://wa.me/96181440046",
    },
  ];

  return (
    <section id="contact" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[600px]">

        {/* ── Left pane: Studio credentials ─────────── */}
        <div className="relative bg-secondary/30 border-b lg:border-b-0 lg:border-r border-white/5 px-8 md:px-16 py-20 md:py-28 flex flex-col justify-between overflow-hidden">

          {/* ambient top-left glow */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 blur-[120px] pointer-events-none" />

          {/* Top: eyebrow + headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="eyebrow mb-8">
                <span className="pulse-dot" />
                {t("contact.eyebrow")}
              </div>

              <h2 className="text-6xl md:text-6xl lg:text-6xl font-bold leading-[1.05] mb-6">
                {t("contact.title1")}
                <br />
                <span className="serif-italic text-gradient">
                  {t("contact.title2")}
                </span>
              </h2>

              <p className="text-muted text-base leading-relaxed max-w-sm mb-12">
                {t("contact.desc")}
              </p>
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-0 divide-y divide-white/5"
            >
              {contactItems.map((item, i) => (
                <div key={i} className="group flex items-center gap-4 py-4">
                  <div className="w-8 h-8 border border-white/5 bg-background/30 flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-muted/50 mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm text-foreground/80 hover:text-primary transition-colors duration-200 truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground/80">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom: studio stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-white/5"
          >
            <p
              className="text-muted/40 text-xs leading-relaxed"
              style={{ fontStyle: "italic", fontFamily: "var(--font-serif), 'Instrument Serif', Georgia, serif" }}
            >
              {locale === "ar"
                ? "— كل رسالة تُقرأ من شخص حقيقي. الردود تأتي في نفس اليوم."
                : "— Every message is read by a person. Replies come the same day."}
            </p>
          </motion.div>
        </div>

        {/* ── Right pane: Form ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="px-8 md:px-16 py-20 md:py-28 flex flex-col justify-center relative"
        >
          {/* Ambient glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-500/5 blur-[100px] pointer-events-none" />

          {/* Form header */}
          <div className="mb-10">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-2">
              {locale === "ar" ? "نموذج الاستفسار" : "Project Inquiry"}
            </div>
            <div className="w-8 h-px bg-primary mb-0" />
          </div>

          <div className="flex flex-col items-start relative z-10 mt-8">
            <p className="text-foreground/80 text-lg mb-10 max-w-md">
              {locale === "ar" 
                ? "انقر أدناه لبدء محادثة مباشرة معنا عبر واتساب. سنرد عليك في أسرع وقت ممكن لمناقشة مشروعك."
                : "Click below to start a direct chat with us on WhatsApp. We'll reply as soon as possible to discuss your project."}
            </p>

            <a
              href="https://wa.me/96181440046"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white text-base font-bold uppercase tracking-widest overflow-hidden hover:bg-[#20bd5a] transition-colors duration-300 rounded-sm"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 0C5.372 0 0 5.373 0 12.003c0 2.117.555 4.107 1.523 5.837L.026 23.974l6.278-1.648A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12.003C24 5.372 18.627 0 11.998 0z"/></svg>
                {locale === "ar" ? "تحدث معنا عبر واتساب" : "Chat on WhatsApp"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
