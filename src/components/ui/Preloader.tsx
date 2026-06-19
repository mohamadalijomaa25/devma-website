"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 seconds delay as requested
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Logo */}
            <div className="flex flex-col items-center gap-6 mb-12">
              <div className="rounded-full overflow-hidden border border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                <Image 
                  src="/logo-alt.jpeg" 
                  alt="Devma" 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 object-cover"
                />
              </div>
              <div className="text-4xl md:text-5xl font-bold tracking-widest text-foreground flex items-center">
                DEVMA<span className="text-gradient italic font-serif">.WEB</span>
              </div>
            </div>
            
            {/* Loading Bar */}
            <div className="w-48 h-[1px] bg-border relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.6, ease: "easeInOut" }}
              />
            </div>
            
            <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted font-semibold">
              Loading
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
