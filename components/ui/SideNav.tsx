"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDeck } from "./DeckContent";

interface SideNavProps {
  sections: Array<{ id: string; label: string; icon: string; index: number }>;
}

export default function SideNav({ sections }: SideNavProps) {
  const { currentIndex, goToSlide } = useDeck();
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="absolute right-[11px] top-0 bottom-0 w-px bg-white/10" />

      <div className="relative flex flex-col gap-4">
        {sections.map((section, idx) => (
          <div key={section.id} className="relative flex items-center justify-end">
            <AnimatePresence>
              {(isExpanded || hoveredIndex === idx) && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-8 mr-2 whitespace-nowrap"
                >
                  <span className="text-white/60 text-xs tracking-wider bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    {section.label}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => goToSlide(section.index)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group focus:outline-none"
              aria-label={`Go to ${section.label}`}
            >
              <div
                className={`
                  w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center
                  ${currentIndex === section.index 
                    ? "bg-[#C5A059] scale-110" 
                    : "bg-white/20 hover:bg-white/40"
                  }
                `}
              >
                <span className="text-[10px] opacity-70 group-hover:opacity-100">
                  {section.icon}
                </span>
              </div>

              {currentIndex === section.index && (
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-full border border-[#C5A059]"
                />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}