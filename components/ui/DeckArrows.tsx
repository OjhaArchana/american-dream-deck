"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useDeck } from "./DeckContent";

export default function DeckArrows() {
  const { currentIndex, totalSlides, nextSlide, prevSlide } = useDeck();

  return (
    <>
      {/* Navigation Arrows Container - Bottom Left */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center gap-3">
        {/* Left Arrow / Previous */}
        <AnimatePresence>
          {currentIndex > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Right Arrow / Next */}
        <AnimatePresence>
          {currentIndex < totalSlides - 1 && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-all duration-300 flex items-center justify-center group"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
        <p className="text-white/60 text-xs tracking-widest">
          {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </p>
      </div>
    </>
  );
}