"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  mode: "category" | "journey";
  setMode: (mode: "category" | "journey") => void;
}

export default function SectionToggle({ mode, setMode }: Props) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <AnimatePresence>
        {isRevealed ? (
          // Expanded toggle — shows both buttons
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-full p-1 flex gap-1 shadow-2xl"
          >
            {/* Category Button */}
            <button
              onClick={() => setMode("category")}
              className={`relative px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 ${
                mode === "category" ? "text-black" : "text-white/60 hover:text-white/90"
              }`}
            >
              {mode === "category" && (
                <motion.div
                  layoutId="toggle-bg"
                  className="absolute inset-0 bg-[#C5A059] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">By Category</span>
            </button>

            {/* Journey Button */}
            <button
              onClick={() => setMode("journey")}
              className={`relative px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 ${
                mode === "journey" ? "text-black" : "text-white/60 hover:text-white/90"
              }`}
            >
              {mode === "journey" && (
                <motion.div
                  layoutId="toggle-bg"
                  className="absolute inset-0 bg-[#C5A059] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">By Journey</span>
            </button>
          </motion.div>
        ) : (
          // Collapsed state — shows a subtle pill with just the current mode
          <motion.button
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.6 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsRevealed(true)}
            className="bg-black/40 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 flex items-center gap-2 cursor-pointer"
          >
            <span className="text-white/40 text-[10px] tracking-wider uppercase">View:</span>
            <span className={`text-xs tracking-wider uppercase ${mode === "category" ? "text-[#C5A059]" : "text-white/80"}`}>
              {mode === "category" ? "By Category" : "By Journey"}
            </span>
            <svg 
              className="w-3 h-3 text-white/40" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}