"use client";

import React from "react";
import { motion } from "framer-motion";

const inputClass =
  "w-full bg-[#080808] border border-[#1e1e1e] rounded-lg px-4 py-3 text-[#EDEDED] placeholder-[#333] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/60 focus:border-[#3B82F6]/60 transition-all text-sm font-medium";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") || "Not provided";
    const email = fd.get("email") || "Not provided";
    const business = fd.get("business") || "Not provided";
    const project = fd.get("project") || "Not provided";
    const budget = fd.get("budget") || "Not provided";
    const message = fd.get("message") || "No message";

    const text = `*New Project Inquiry* 🚀

*Name:* ${name}
*Email:* ${email}
*Business:* ${business}
*Type:* ${project}
*Budget:* ${budget}

*Note:*
${message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/96181440046?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="border-t border-[#1e1e1e]">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">
          {/* Left — CTA copy */}
          <div>
            <div className="eyebrow mb-6">
              <span className="pulse-dot" />
              Reading messages now
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Write to the studio.
              <br />
              <span className="serif-italic" style={{color:"#3B82F6"}}>Somebody reads every note.</span>
            </h2>
            <p className="text-[#666] text-base mb-8 max-w-md leading-relaxed">
              Fast reply from DEVMA. Fill out the form, and it will instantly open a WhatsApp conversation with us.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-[#555]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                <a href="mailto:hello@devma.web" className="hover:text-white transition-colors">hello@devma.web</a>
              </div>
              <div className="flex items-center gap-3 text-[#555]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <a href="https://instagram.com/devma.web" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@devma.web</a>
              </div>
              <div className="flex items-center gap-3 text-[#555]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Remote · Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0D0D0D] border border-[#1e1e1e] rounded-2xl p-7"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-[#444] mb-1.5">Name</label>
                  <input type="text" id="name" name="name" required className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-[#444] mb-1.5">Email</label>
                  <input type="email" id="email" name="email" className={inputClass} placeholder="you@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="business" className="block text-[10px] font-bold uppercase tracking-widest text-[#444] mb-1.5">Business</label>
                  <input type="text" id="business" name="business" className={inputClass} placeholder="Your Company" />
                </div>
                <div>
                  <label htmlFor="project" className="block text-[10px] font-bold uppercase tracking-widest text-[#444] mb-1.5">Project Type</label>
                  <div className="relative">
                    <select id="project" name="project" className={inputClass}>
                      <option value="" className="bg-[#0D0D0D]">What do you need?</option>
                      <option value="Business Website" className="bg-[#0D0D0D]">Business Website</option>
                      <option value="Restaurant Website" className="bg-[#0D0D0D]">Restaurant Website</option>
                      <option value="E-commerce Store" className="bg-[#0D0D0D]">E-commerce Store</option>
                      <option value="Landing Page" className="bg-[#0D0D0D]">Landing Page</option>
                      <option value="Website Redesign" className="bg-[#0D0D0D]">Website Redesign</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-[10px] font-bold uppercase tracking-widest text-[#444] mb-1.5">Budget</label>
                <div className="relative">
                  <select id="budget" name="budget" className={inputClass}>
                    <option value="" className="bg-[#0D0D0D]">Select a range</option>
                    <option value="$1,000 – $3,000" className="bg-[#0D0D0D]">$1,000 – $3,000</option>
                    <option value="$3,000 – $5,000" className="bg-[#0D0D0D]">$3,000 – $5,000</option>
                    <option value="$5,000 – $10,000" className="bg-[#0D0D0D]">$5,000 – $10,000</option>
                    <option value="$10,000+" className="bg-[#0D0D0D]">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-[#444] mb-1.5">Your note</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your project goals, timeline, and anything relevant…"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#3B82F6] text-white text-sm font-semibold rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:bg-[#2563EB] transition-all duration-200"
              >
                Send the note →
              </button>
              <p className="text-center text-[10px] text-[#333] tracking-wide uppercase">Opens directly in WhatsApp</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
