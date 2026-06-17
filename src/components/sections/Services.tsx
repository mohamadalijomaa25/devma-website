"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone, Utensils, ShoppingBag, LayoutTemplate, PenTool, TrendingUp, Wrench,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [MonitorSmartphone, Utensils, ShoppingBag, LayoutTemplate, PenTool, TrendingUp, Wrench];
const nums = ["i.", "ii.", "iii.", "iv.", "v.", "vi.", "vii."];
const tagSets = [
  ["Design", "Code", "SEO"],
  ["Menus", "Reservations", "Local SEO"],
  ["Shopify", "WooCommerce", "Checkout"],
  ["Campaign", "Conversion", "CRO"],
  ["Audit", "Rebuild", "Refresh"],
  ["Rankings", "Traffic", "Technical"],
  ["Updates", "Security", "Hosting"],
];

export function Services() {
  const { t } = useLanguage();

  const services = [
    { num: nums[0], icon: icons[0], title: t("services.s1Title"), desc: t("services.s1Desc"), tags: tagSets[0] },
    { num: nums[1], icon: icons[1], title: t("services.s2Title"), desc: t("services.s2Desc"), tags: tagSets[1] },
    { num: nums[2], icon: icons[2], title: t("services.s3Title"), desc: t("services.s3Desc"), tags: tagSets[2] },
    { num: nums[3], icon: icons[3], title: t("services.s4Title"), desc: t("services.s4Desc"), tags: tagSets[3] },
    { num: nums[4], icon: icons[4], title: t("services.s5Title"), desc: t("services.s5Desc"), tags: tagSets[4] },
    { num: nums[5], icon: icons[5], title: t("services.s6Title"), desc: t("services.s6Desc"), tags: tagSets[5] },
    { num: nums[6], icon: icons[6], title: t("services.s7Title"), desc: t("services.s7Desc"), tags: tagSets[6] },
  ];

  return (
    <section id="services" className="border-t border-border">
      <div className="container mx-auto px-6 py-20 md:py-32" style={{maxWidth:"1200px"}}>
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow">
            <span className="text-primary">i.</span> {t("services.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            {t("services.title1")}{" "}
            <span className="serif-italic" style={{color:"#3B82F6"}}>{t("services.title2")}</span>
          </h2>
          <p className="text-muted max-w-lg text-base leading-relaxed">
            Each project is drafted, designed, and coded for one client. Nothing is pulled from a shelf.
          </p>
        </div>

        {/* Service list */}
        <div className="divide-y divide-border">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-start py-6 hover:bg-secondary transition-colors -mx-6 px-6 cursor-default"
            >
              {/* Number + icon */}
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <span className="text-primary text-sm font-mono font-bold">{s.num}</span>
                <div className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted group-hover:text-primary group-hover:bg-primary/10 transition-all">
                  <s.icon className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-muted group-hover:border-primary/30 group-hover:text-primary/80 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <a href="https://wa.me/96181440046" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">
            {t("services.discuss")}
          </a>
        </div>
      </div>
    </section>
  );
}
