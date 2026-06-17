"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

  const variants = {
    primary: "bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)]",
    secondary: "bg-[#151515] text-white hover:bg-[#1f1f1f] border border-[#222222]",
    outline: "border border-[#333333] bg-transparent text-white hover:bg-[#151515] hover:border-[#3B82F6]",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "h-9 px-5 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-[52px] px-8 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
