"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.work"), href: "#portfolio" },
    { name: t("nav.process"), href: "#process" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between" style={{maxWidth:"1200px"}}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 border border-[#3B82F6]/30 bg-background flex-shrink-0">
              <img src="/logo-alt.jpg" alt="DEVMA Mark" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/logo.png'; }} />
            </div>
            <span className="text-foreground font-bold text-base md:text-lg tracking-wide uppercase leading-none mt-1" style={{fontFamily:"var(--font-outfit), sans-serif"}}>
              DEVMA<span className="text-primary">.WEB</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-xs font-semibold tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* CTA + Actions + hamburger */}
          <div className="flex items-center gap-4">
            
            {/* Toggles (Desktop & Mobile) */}
            <div className="flex items-center gap-2 border-r border-border pe-4 me-1">
              <button
                onClick={() => setLocale(locale === "en" ? "ar" : "en")}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-border/50 transition-colors"
                title="Toggle Language"
              >
                <Globe size={16} />
                <span className="text-[10px] font-bold ms-1 uppercase">{locale}</span>
              </button>
              
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-border/50 transition-colors"
                  title="Toggle Theme"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}
            </div>

            <a
              href="https://wa.me/96181440046"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              {t("nav.startProject")}
            </a>
            
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center text-muted hover:text-foreground transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-20 px-8"
          >
            <nav className="flex flex-col gap-1 mt-8">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.name}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 py-4 border-b border-border group"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-muted text-xs font-mono">0{i + 1}</span>
                  <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {l.name}
                  </span>
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto pb-10 flex items-center gap-6 text-xs text-muted tracking-wider">
              <a href="https://instagram.com/devma.web" className="hover:text-foreground transition-colors">@devma.web</a>
              <a href="mailto:hello@devma.web" className="hover:text-foreground transition-colors">hello@devma.web</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
