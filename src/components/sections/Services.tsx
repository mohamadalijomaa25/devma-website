"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone, Utensils, ShoppingBag, LayoutTemplate, PenTool, TrendingUp, Wrench,
} from "lucide-react";

const services = [
  { num: "i.", icon: MonitorSmartphone, title: "Business Websites", tags: ["Design", "Code", "SEO"], desc: "A full site built from scratch — structure, copy, visuals, and hosting. The whole thing, done right." },
  { num: "ii.", icon: Utensils, title: "Restaurant Websites", tags: ["Menus", "Reservations", "Local SEO"], desc: "Appetizing designs with QR menus, reservation systems, and Google ranking baked in." },
  { num: "iii.", icon: ShoppingBag, title: "E-commerce Stores", tags: ["Shopify", "WooCommerce", "Checkout"], desc: "High-converting online stores with smooth product browsing and a checkout that actually converts." },
  { num: "iv.", icon: LayoutTemplate, title: "Landing Pages", tags: ["Campaign", "Conversion", "CRO"], desc: "One scroll, one job: turn a curious visitor into a paying client. Built for campaigns and launches." },
  { num: "v.", icon: PenTool, title: "Website Redesign", tags: ["Audit", "Rebuild", "Refresh"], desc: "Your existing site, rebuilt from the ground up with modern aesthetics and better performance." },
  { num: "vi.", icon: TrendingUp, title: "SEO Optimization", tags: ["Rankings", "Traffic", "Technical"], desc: "Technical SEO, page speed, and content structure — everything Google needs to rank you higher." },
  { num: "vii.", icon: Wrench, title: "Website Maintenance", tags: ["Updates", "Security", "Hosting"], desc: "We keep your site live, fast, and secure. You focus on the business; we handle the tech." },
];

export function Services() {
  return (
    <section id="services" className="border-t border-[#1e1e1e]">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow">
            <span className="text-[#3B82F6]">i.</span> What the studio does
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            A short{" "}
            <span className="serif-italic" style={{color:"#3B82F6"}}>catalogue</span>
            <br />of services.
          </h2>
          <p className="text-[#666] max-w-lg text-base leading-relaxed">
            Each project is drafted, designed, and coded for one client.
            Nothing is pulled from a shelf.
          </p>
        </div>

        {/* Service list */}
        <div className="divide-y divide-[#1a1a1a]">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-start py-6 hover:bg-[#0d0d0d] transition-colors -mx-6 px-6 cursor-default"
            >
              {/* Number + icon */}
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <span className="text-[#3B82F6] text-sm font-mono font-bold">{s.num}</span>
                <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#555] group-hover:text-[#3B82F6] group-hover:bg-[#3B82F6]/10 transition-all">
                  <s.icon className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#222] text-[#555] group-hover:border-[#3B82F6]/30 group-hover:text-[#3B82F6]/80 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[#1a1a1a]">
          <a href="https://wa.me/96181440046" target="_blank" rel="noopener noreferrer" className="text-sm text-[#555] hover:text-white transition-colors">
            Discuss your project with us →
          </a>
        </div>
      </div>
    </section>
  );
}
