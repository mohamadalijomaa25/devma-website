"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, CircleCheck } from "lucide-react";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);
import { useLanguage } from "@/context/LanguageContext";

const inputClass =
  "w-full bg-transparent border-b border-border/60 px-0 py-3 text-foreground text-sm font-medium placeholder-muted/50 focus:outline-none focus:border-primary transition-all duration-300";

const selectClass =
  "w-full bg-transparent border-b border-border/60 px-0 py-3 text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all duration-300 appearance-none cursor-pointer";

export function Contact() {
  const { t, locale } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") || "Not provided";
    const email = fd.get("email") || "Not provided";
    const business = fd.get("business") || "Not provided";
    const project = fd.get("project") || "Not provided";
    const budget = fd.get("budget") || "Not provided";
    const message = fd.get("message") || "No message";

    const text = `*New Project Inquiry* 🚀\n\n*Name:* ${name}\n*Email:* ${email}\n*Business:* ${business}\n*Type:* ${project}\n*Budget:* ${budget}\n\n*Note:*\n${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/96181440046?text=${encoded}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

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

          <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted/60 mb-2">
                  {t("contact.name")} <span className="text-primary">*</span>
                </label>
                <input type="text" id="name" name="name" required className={inputClass} placeholder={t("contact.placeholderName")} />
              </div>
              <div>
                <label htmlFor="email" className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted/60 mb-2">
                  {t("contact.email")}
                </label>
                <input type="email" id="email" name="email" className={inputClass} placeholder={t("contact.placeholderEmail")} />
              </div>
            </div>

            {/* Row 2: Business + Project type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="business" className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted/60 mb-2">
                  {t("contact.business")}
                </label>
                <input type="text" id="business" name="business" className={inputClass} placeholder={t("contact.placeholderBusiness")} />
              </div>
              <div>
                <label htmlFor="project" className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted/60 mb-2">
                  {t("contact.projectType")}
                </label>
                <div className="relative">
                  <select id="project" name="project" className={selectClass}>
                    <option value="" className="bg-card">{t("contact.selectProject")}</option>
                    <option value="Business Website" className="bg-card">{locale === "ar" ? "موقع شركة" : "Business Website"}</option>
                    <option value="Restaurant Website" className="bg-card">{locale === "ar" ? "موقع مطعم" : "Restaurant Website"}</option>
                    <option value="E-commerce Store" className="bg-card">{locale === "ar" ? "متجر إلكتروني" : "E-commerce Store"}</option>
                    <option value="Landing Page" className="bg-card">{locale === "ar" ? "صفحة هبوط" : "Landing Page"}</option>
                    <option value="Website Redesign" className="bg-card">{locale === "ar" ? "إعادة تصميم" : "Website Redesign"}</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Budget */}
            <div>
              <label htmlFor="budget" className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted/60 mb-2">
                {t("contact.budget")}
              </label>
              <div className="relative">
                <select id="budget" name="budget" className={selectClass}>
                  <option value="" className="bg-card">{t("contact.selectBudget")}</option>
                  <option value="Less than $500" className="bg-card">{locale === "ar" ? "أقل من 500$" : "Less than $500"}</option>
                  <option value="$500 – $1,000" className="bg-card">$500 – $1,000</option>
                  <option value="$1,000 – $3,000" className="bg-card">$1,000 – $3,000</option>
                  <option value="$3,000+" className="bg-card">$3,000+</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <label htmlFor="message" className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted/60 mb-2">
                {t("contact.yourNote")} <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`${inputClass} resize-none`}
                placeholder={t("contact.placeholderNote")}
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <button
                type="submit"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest overflow-hidden hover:bg-blue-600 transition-colors duration-300  hover:"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {sent ? (
                    <>
                      <CircleCheck className="w-4 h-4" />
                      {locale === "ar" ? "تم الإرسال!" : "Sent!"}
                    </>
                  ) : (
                    <>
                      {t("contact.send")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </span>
                {/* Sweep animation */}
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </button>

              <div className="flex items-center gap-2 text-muted/50 text-[10px] uppercase tracking-widest">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 0C5.372 0 0 5.373 0 12.003c0 2.117.555 4.107 1.523 5.837L.026 23.974l6.278-1.648A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12.003C24 5.372 18.627 0 11.998 0z"/></svg>
                {t("contact.opensWhatsapp")}
              </div>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
