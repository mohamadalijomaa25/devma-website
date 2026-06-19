"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const Mail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const WhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export function Footer() {
  const { t, locale } = useLanguage();

  const footerServicesEn = ["Business Websites", "Restaurant Websites", "E-commerce", "Landing Pages", "Website Redesign", "SEO Optimization"];
  const footerServicesAr = ["مواقع الشركات", "مواقع المطاعم", "التجارة الإلكترونية", "صفحات الهبوط", "إعادة التصميم", "تحسين محركات البحث"];
  const footerServices = locale === "ar" ? footerServicesAr : footerServicesEn;

  const footerNavEn = ["About", "Services", "Work", "Process", "Contact"];
  const footerNavAr = ["من نحن", "خدماتنا", "أعمالنا", "آلية العمل", "تواصل معنا"];
  const footerNavHrefs = ["#about", "#services", "#portfolio", "#process", "#contact"];
  const footerNav = locale === "ar" ? footerNavAr : footerNavEn;

  return (
    <footer className="border-t border-white/5 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-6 pt-16 pb-8" style={{maxWidth:"1200px"}}>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 mb-14">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center border border-primary/40 shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                <img src="/logo-alt.jpeg" alt="DEVMA Mark" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/logo.jpg'; }} />
              </div>
              <span className="text-foreground font-bold text-lg tracking-wide uppercase leading-none mt-1" style={{fontFamily:"var(--font-outfit), sans-serif"}}>
                DEVMA<span className="text-primary">.WEB</span>
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-5"
              style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}>
              {t("footer.desc")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/devma.web"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover: transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="mailto:devma.web.lb@gmail.com"
                className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover: transition-all duration-300"
                aria-label="Email"
              >
                <Mail />
              </a>
              <a
                href="https://wa.me/96181440046"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover: transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsApp />
              </a>
            </div>
          </div>

          {/* Catalogue */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-5">
              {locale === "ar" ? "الخدمات" : "Catalogue"}
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted hover:text-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Index */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-5">
              {locale === "ar" ? "الفهرس" : "Index"}
            </h4>
            <ul className="space-y-2.5">
              {footerNav.map((n, i) => (
                <li key={n}>
                  <a href={footerNavHrefs[i]} className="text-sm text-muted hover:text-foreground transition-colors">{n}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-5">
              {locale === "ar" ? "تواصل" : "Get in Touch"}
            </h4>
            <ul className="space-y-2.5">
              <li><a href="https://wa.me/96181440046" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">+961 81 440 046</a></li>
              <li><a href="mailto:devma.web.lb@gmail.com" className="text-sm text-muted hover:text-foreground transition-colors">devma.web.lb@gmail.com</a></li>
              <li><a href="https://instagram.com/devma.web" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">@devma.web</a></li>
              <li><span className="text-sm text-muted">{locale === "ar" ? "عن بعد · حول العالم" : "Remote · Worldwide"}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[11px] text-muted tracking-wide">
            © {new Date().getFullYear()} {t("footer.copyright")} &nbsp;·&nbsp;{" "}
            <em style={{fontFamily:"var(--font-serif), Georgia, serif"}}>No. 01</em>
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[11px] text-muted hover:text-foreground transition-colors">
              {locale === "ar" ? "الخصوصية" : "Privacy"}
            </a>
            <a href="#" className="text-[11px] text-muted hover:text-foreground transition-colors">
              {locale === "ar" ? "الشروط" : "Terms"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
