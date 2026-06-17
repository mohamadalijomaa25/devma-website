"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  delay = 0,
  hoverEffect = true,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "bg-secondary/50 border border-border backdrop-blur-sm rounded-2xl p-6 md:p-8",
        hoverEffect && "hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
