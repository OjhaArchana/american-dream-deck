"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "@/components/sections/Home";
import Property from "@/components/sections/Property";
import Retail from "@/components/sections/Retail";
import Luxury from "@/components/sections/Luxury";
import Dining from "@/components/sections/Dining";
import Entertainment from "@/components/sections/Entertainment";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";

import Loader from "@/components/ui/Loader";

export default function Page() {
  const [entered, setEntered] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // throttle control
  const isThrottled = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const slides = [
    { id: "home", component: <Home /> },
    { id: "property", component: <Property /> },
    { id: "retail", component: <Retail /> },
    { id: "luxury", component: <Luxury /> },
    { id: "dining", component: <Dining /> },
    { id: "entertainment", component: <Entertainment /> },
    { id: "events", component: <Events /> },
    { id: "partner", component: <Contact goTo={goTo} /> },
  ];

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1);
  }, [current, goTo, slides.length]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  // 🔑 Keyboard navigation
  useEffect(() => {
    if (!entered) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [entered, next, prev]);

  // 🖱️ Wheel navigation (desktop)
  useEffect(() => {
    if (!entered) return;

    const handleWheel = (e: WheelEvent) => {
      if (isThrottled.current) return;

      if (e.deltaY > 50) next();
      else if (e.deltaY < -50) prev();

      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [entered, next, prev]);

  // 📱 Touch swipe (mobile)
  useEffect(() => {
    if (!entered) return;

    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isThrottled.current) return;

      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;

      if (Math.abs(diff) < 50) return;

      if (diff > 0) next();
      else prev();

      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 800);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [entered, next, prev]);

  // 🎬 Animation variants
 const variants = {
  enter: {
    opacity: 0,
    scale: 0.96,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.96,
  },
};

  // 🚪 Loader gate
  if (!entered) {
    return <Loader onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-black overscroll-none">
      
      {/* Slides */}
      <div className="h-full w-full relative">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {slides[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-3">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-10 h-10 border border-white/20 text-white/50
                     hover:border-white hover:text-white
                     disabled:opacity-20 disabled:cursor-not-allowed
                     transition-all duration-300 flex items-center justify-center"
        >
          ←
        </button>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="w-10 h-10 border border-white/20 text-white/50
                     hover:border-white hover:text-white
                     disabled:opacity-20 disabled:cursor-not-allowed
                     transition-all duration-300 flex items-center justify-center"
        >
          →
        </button>
      </div>

      {/*Counter*/}
      <div className="fixed bottom-8 left-8 z-50">
        <p className="text-white/20 text-xs tracking-widest">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}