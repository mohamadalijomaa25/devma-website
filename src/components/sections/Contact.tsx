"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t, locale } = useLanguage();

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-primary/60 focus:border-primary/60 transition-all text-sm font-medium";

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
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">
          {/* Left — CTA copy */}
          <div>
            <div className="eyebrow mb-6">
              <span className="pulse-dot" />
              {t("contact.eyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {t("contact.title1")}
              <br />
              <span className="serif-italic" style={{color:"#3B82F6"}}>{t("contact.title2")}</span>
            </h2>
            <p className="text-muted text-base mb-8 max-w-md leading-relaxed">
              {t("contact.desc")}
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                <a href="mailto:devma.web.lb@gmail.com" className="hover:text-foreground transition-colors">devma.web.lb@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <a href="https://instagram.com/devma.web" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">@devma.web</a>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{t("contact.remote")}</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1.5">{t("contact.name")}</label>
                  <input type="text" id="name" name="name" required className={inputClass} placeholder={t("contact.placeholderName")} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1.5">{t("contact.email")}</label>
                  <input type="email" id="email" name="email" className={inputClass} placeholder={t("contact.placeholderEmail")} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="business" className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1.5">{t("contact.business")}</label>
                  <input type="text" id="business" name="business" className={inputClass} placeholder={t("contact.placeholderBusiness")} />
                </div>
                <div>
                  <label htmlFor="project" className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1.5">{t("contact.projectType")}</label>
                  <div className="relative">
                    <select id="project" name="project" className={inputClass}>
                      <option value="" className="bg-card">{t("contact.selectProject")}</option>
                      <option value="Business Website" className="bg-card">{locale === "ar" ? "موقع شركة" : "Business Website"}</option>
                      <option value="Restaurant Website" className="bg-card">{locale === "ar" ? "موقع مطعم" : "Restaurant Website"}</option>
                      <option value="E-commerce Store" className="bg-card">{locale === "ar" ? "متجر إلكتروني" : "E-commerce Store"}</option>
                      <option value="Landing Page" className="bg-card">{locale === "ar" ? "صفحة هبوط" : "Landing Page"}</option>
                      <option value="Website Redesign" className="bg-card">{locale === "ar" ? "إعادة تصميم" : "Website Redesign"}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1.5">{t("contact.budget")}</label>
                <div className="relative">
                  <select id="budget" name="budget" className={inputClass}>
                    <option value="" className="bg-card">{t("contact.selectBudget")}</option>
                    <option value="$1,000 – $3,000" className="bg-card">$1,000 – $3,000</option>
                    <option value="$3,000 – $5,000" className="bg-card">$3,000 – $5,000</option>
                    <option value="$5,000 – $10,000" className="bg-card">$5,000 – $10,000</option>
                    <option value="$10,000+" className="bg-card">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1.5">{t("contact.yourNote")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`${inputClass} resize-none`}
                  placeholder={t("contact.placeholderNote")}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white text-sm font-semibold rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:bg-blue-700 transition-all duration-200"
              >
                {t("contact.send")}
              </button>
              <p className="text-center text-[10px] text-muted tracking-wide uppercase">{t("contact.opensWhatsapp")}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
