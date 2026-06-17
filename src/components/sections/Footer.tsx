"use client";

import React from "react";

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

const footerServices = ["Business Websites", "Restaurant Websites", "E-commerce", "Landing Pages", "Website Redesign", "SEO Optimization"];
const footerNav = ["About", "Services", "Work", "Process", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#080808]">
      <div className="container mx-auto px-6 pt-16 pb-8" style={{maxWidth:"1200px"}}>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 mb-14">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 border border-[#3B82F6]/30 bg-[#0A0A0A] flex-shrink-0">
                <img src="/logo-alt.jpg" alt="DEVMA Mark" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/logo.png'; }} />
              </div>
              <span className="text-white font-bold text-lg tracking-wide uppercase leading-none mt-1" style={{fontFamily:"var(--font-outfit), sans-serif"}}>
                DEVMA<span className="text-[#3B82F6]">.WEB</span>
              </span>
            </a>
            <p className="text-[#444] text-sm leading-relaxed max-w-xs mb-5"
              style={{fontStyle:"italic", fontFamily:"var(--font-serif), 'Instrument Serif', Georgia, serif"}}>
              A web design studio. Custom websites for businesses that want to be taken seriously —{" "}
              <em>carefully, one project at a time.</em>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/devma.web"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-[#1e1e1e] flex items-center justify-center text-[#444] hover:text-white hover:border-[#333] transition-all"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="mailto:hello@devma.web"
                className="w-8 h-8 rounded-lg border border-[#1e1e1e] flex items-center justify-center text-[#444] hover:text-white hover:border-[#333] transition-all"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* Catalogue */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#444] mb-5">Catalogue</h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-[#555] hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Index */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#444] mb-5">Index</h4>
            <ul className="space-y-2.5">
              {footerNav.map((n) => (
                <li key={n}>
                  <a href={`#${n.toLowerCase()}`} className="text-sm text-[#555] hover:text-white transition-colors">{n}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#444] mb-5">Get in Touch</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:hello@devma.web" className="text-sm text-[#555] hover:text-white transition-colors">hello@devma.web</a></li>
              <li><a href="https://instagram.com/devma.web" target="_blank" rel="noreferrer" className="text-sm text-[#555] hover:text-white transition-colors">@devma.web</a></li>
              <li><span className="text-sm text-[#333]">Remote · Worldwide</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#111] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[11px] text-[#333] tracking-wide">
            © {new Date().getFullYear()} DEVMA Studio &nbsp;·&nbsp;{" "}
            <em style={{fontFamily:"var(--font-serif), Georgia, serif"}}>No. 01</em>
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[11px] text-[#333] hover:text-[#555] transition-colors">Privacy</a>
            <a href="#" className="text-[11px] text-[#333] hover:text-[#555] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
