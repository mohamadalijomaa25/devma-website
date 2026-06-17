"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#1e1e1e]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between" style={{maxWidth:"1200px"}}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 border border-[#3B82F6]/30 bg-[#0A0A0A] flex-shrink-0">
              <img src="/logo-alt.jpg" alt="DEVMA Mark" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/logo.png'; }} />
            </div>
            <span className="text-white font-bold text-base md:text-lg tracking-wide uppercase leading-none mt-1" style={{fontFamily:"var(--font-outfit), sans-serif"}}>
              DEVMA<span className="text-[#3B82F6]">.WEB</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-xs font-semibold tracking-widest uppercase text-[#666] hover:text-white transition-colors duration-200"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/96181440046"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all duration-200"
            >
              Start a Project
            </a>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center text-[#888] hover:text-white transition-colors"
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
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col pt-20 px-8"
          >
            <nav className="flex flex-col gap-1 mt-8">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.name}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 py-4 border-b border-[#1e1e1e] group"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-[#333] text-xs font-mono">0{i + 1}</span>
                  <span className="text-2xl font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                    {l.name}
                  </span>
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto pb-10 flex items-center gap-6 text-xs text-[#444] tracking-wider">
              <a href="https://instagram.com/devma.web" className="hover:text-white transition-colors">@devma.web</a>
              <a href="mailto:hello@devma.web" className="hover:text-white transition-colors">hello@devma.web</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
