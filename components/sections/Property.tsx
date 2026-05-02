"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

function Counter({ target, prefix = "", suffix = "", delay = 0 }: { target: number; prefix?: string; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const increment = target / (duration / 16);
      const counterTimer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counterTimer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(counterTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [inView, target, delay]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 3000000, suffix: "+", label: "Square Feet", sub: "3x the size of Mall of America", narrative: "This is massive.", proximityStat: false },
  { value: 450, suffix: "+", label: "Retail Tenants", sub: "From luxury flagships to pop-ups", narrative: "450+ brands under one roof.", proximityStat: false },
  { value: 40, suffix: "M+", label: "Annual Visitors", sub: "More than Disney World", narrative: "40 million people. Every year.", proximityStat: false },
  { value: 125, suffix: " min", label: "Avg Dwell Time", sub: "Industry avg is 68 min", narrative: "They stay. For 2+ hours.", proximityStat: false },
  { value: 55, suffix: "%", label: "Entertainment Space", sub: "Unmatched in North America", narrative: "More entertainment than retail.", proximityStat: false },
  { value: 8, suffix: " miles", label: "From Midtown Manhattan", sub: "20M+ metro catchment area", narrative: "8 miles from Manhattan.", proximityStat: true },
];

const demographics = [
  { label: "Ages 25-44", pct: 68, narrative: "Young. Affluent. Intentional." },
  { label: "HHI $100K+", pct: 54, narrative: "Disposable income. Discretionary spend." },
  { label: "Return Visitors", pct: 71, narrative: "They come back. Again and again." },
  { label: "College Educated", pct: 63, narrative: "Educated. Discerning. High-expectation." },
];

export default function Property() {
  const [activeNarrative, setActiveNarrative] = useState<string | null>(null);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isProximityModalOpen, setIsProximityModalOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Loop through stats one at a time, but stop when hovering
  useEffect(() => {
    if (isHovering) return; // Don't change stats when hovering

    intervalRef.current = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  const currentStat = stats[currentStatIndex];

  return (
    <section id="property" className="min-h-screen flex items-center bg-black text-white px-6 py-14 md:px-20 md:py-18">
      <div className="w-full max-w-[1700px] mx-auto">
        {/* Chapter Marker */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-4 text-center">
          <motion.h2
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl md:text-7xl font-light"
          >
            This is <span className="gold-text">massive.</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-[#C5A059] mx-auto mt-2"
          />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: The Story + Looping Stats */}
          <div>
            {/* The Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
                Scale, entertainment, and proximity combine with a loyal audience built for
                <span className="text-[#C5A059]"> high-intent retail, dining, and brand experiences.</span>
              </p>

              <div className="space-y-2 pt-1">
                <p className="text-white/40 text-sm tracking-wider">THE STORY SO FAR</p>
                <div className="space-y-3">
                  {["Not a mall. → A destination.", "3M square feet → 3x Mall of America", "40M visitors → More than Disney World", "125 min dwell time → Industry avg 68 min"].map(
                    (line, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.15 }}
                        className="text-white/30 text-sm font-mono"
                      >
                        {line}
                      </motion.p>
                    ),
                  )}
                </div>
              </div>
            </motion.div>

            {/* LOOPING STATS — Single stat at a time with hover pause */}
            {/* LOOPING STATS — Single stat at a time with hover pause */}
            <div className="relative mt-10">
              <div className="flex items-center justify-between mb-2">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <p className="text-white/40 text-xs tracking-widest uppercase">The Numbers That Matter</p>
                </motion.div>

                {/* View Proximity Button - Parallel to header, reduced width */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="hidden md:block"
                >
                  <button
                    onClick={() => setIsProximityModalOpen(true)}
                    className="px-4 py-1.5 bg-[#C5A059]/10 border border-[#C5A059]/50 text-[#C5A059] text-[9px] tracking-widest uppercase rounded-full hover:bg-[#C5A059] hover:text-black transition-all duration-500 flex items-center justify-center gap-1.5 group whitespace-nowrap"
                  >
                    <span className="text-[10px]">📍</span>
                    View Location
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                </motion.div>
              </div>

              <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStatIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-4"
                  >
                    <div
                      className="bg-black border border-white/10 rounded-xl p-5 group hover:bg-white/5 transition-all duration-300 cursor-pointer relative"
                      onMouseEnter={() => setActiveNarrative(currentStat.narrative)}
                      onMouseLeave={() => setActiveNarrative(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-3xl md:text-4xl font-light text-[#C5A059] drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]">
                            <Counter target={currentStat.value} suffix={currentStat.suffix} delay={0} />
                          </p>
                          <p className="text-white/80 text-sm tracking-wide mt-1">{currentStat.label}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/40 text-xs max-w-[180px]">{currentStat.sub}</p>
                        </div>
                      </div>

                      {/* Floating narrative tooltip */}
                      {activeNarrative === currentStat.narrative && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute left-1/2 -translate-x-1/2 -top-10 bg-[#C5A059]/10 backdrop-blur-md border border-[#C5A059]/30 rounded-full px-4 py-1.5 whitespace-nowrap z-20"
                        >
                          <span className="text-[#C5A059] text-xs font-light">{currentStat.narrative}</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress indicators */}
                <div className="flex justify-start gap-2 mt-2">
                  {stats.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsHovering(true);
                        setCurrentStatIndex(idx);
                        setTimeout(() => setIsHovering(false), 3000);
                      }}
                      className={`h-1 rounded-full transition-all duration-300 ${currentStatIndex === idx ? "w-6 bg-[#C5A059]" : "w-2 bg-white/30 hover:bg-white/50"}`}
                    />
                  ))}
                </div>

                {/* Pause indicator */}
                {isHovering && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/20 text-[8px] text-center mt-3 tracking-wider">
                    ⏸ Paused — hover to stop, click dots to navigate
                  </motion.p>
                )}
              </div>
            </div>

            {/* Mobile: Show button below header */}
            <div className="md:hidden mt-3 mb-4">
              <button
                onClick={() => setIsProximityModalOpen(true)}
                className="w-full py-2 bg-[#C5A059]/10 border border-[#C5A059]/50 text-[#C5A059] text-[10px] tracking-widest uppercase rounded-lg hover:bg-[#C5A059] hover:text-black transition-all duration-500 flex items-center justify-center gap-2 group"
              >
                <span>📍</span>
                View Location & Proximity
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Visitor Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-white/10 p-6 md:p-8 bg-white/5"
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl md:text-4xl font-light">
                These are <span className="gold-text">your customers.</span>
              </h3>
              <p className="text-white/40 text-sm mt-2">A High-Value Audience</p>
            </div>

            <div className="space-y-5">
              {demographics.map((d, i) => (
                <div key={d.label} className="group">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70 tracking-wide">{d.label}</span>
                    <span className="text-white">{d.pct}%</span>
                  </div>
                  <div className="h-px bg-white/10 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-[#C5A059]"
                    />
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-white/30 text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {d.narrative}
                  </motion.p>
                </div>
              ))}
            </div>

            <p className="text-white/20 text-[10px] mt-6 text-center tracking-wide">Source: American Dream Property Analytics, 2024</p>
          </motion.div>
        </div>

        {/* PROXIMITY MODAL */}
        <AnimatePresence>
          {isProximityModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
              onClick={() => setIsProximityModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, type: "spring", damping: 25 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0F] border border-white/10 rounded-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex-shrink-0 flex items-center justify-between p-5 md:p-6 border-b border-white/10 bg-black/50">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-white">
                      <span className="gold-text">Proximity</span> & Location
                    </h3>
                    <p className="text-white/40 text-xs tracking-wider mt-1">8 miles from Midtown Manhattan</p>
                  </div>
                  <button
                    onClick={() => setIsProximityModalOpen(false)}
                    className="text-white/40 hover:text-white text-2xl transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                  >
                    ✕
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        20M+ people in the metro catchment area. Accessible via Lincoln Tunnel, George Washington Bridge, and NJ Transit.
                      </p>
                      <div className="flex gap-6 mb-4">
                        <div>
                          <p className="text-3xl text-[#C5A059] font-light">8 min</p>
                          <p className="text-white/40 text-[9px]">from Manhattan</p>
                        </div>
                        <div className="w-px bg-white/20" />
                        <div>
                          <p className="text-3xl text-[#C5A059] font-light">20M+</p>
                          <p className="text-white/40 text-[9px]">metro catchment</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 text-sm">🚗</span>
                          <span className="text-white/50 text-xs">Lincoln Tunnel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 text-sm">🌉</span>
                          <span className="text-white/50 text-xs">GW Bridge</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 text-sm">🚆</span>
                          <span className="text-white/50 text-xs">NJ Transit</span>
                        </div>
                      </div>
                    </div>

                    {/* Map */}
                    <div className="relative h-[280px] bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-xl overflow-hidden border border-white/10">
                      <svg viewBox="0 0 500 280" className="w-full h-full">
                        <g opacity="0.04">
                          <line x1="0" y1="70" x2="500" y2="70" stroke="white" strokeWidth="0.5" />
                          <line x1="0" y1="140" x2="500" y2="140" stroke="white" strokeWidth="0.5" />
                          <line x1="0" y1="210" x2="500" y2="210" stroke="white" strokeWidth="0.5" />
                          <line x1="125" y1="0" x2="125" y2="280" stroke="white" strokeWidth="0.5" />
                          <line x1="250" y1="0" x2="250" y2="280" stroke="white" strokeWidth="0.5" />
                          <line x1="375" y1="0" x2="375" y2="280" stroke="white" strokeWidth="0.5" />
                        </g>

                        <path d="M 270,10 Q 282,140 275,270" fill="none" stroke="#3B82F6" strokeWidth="4" strokeOpacity="0.2" strokeLinecap="round" />

                        <line x1="245" y1="150" x2="305" y2="150" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="6,4" />

                        <circle cx="245" cy="150" r="3" fill="#C5A059">
                          <animate attributeName="cx" values="245;305;245" dur="3s" repeatCount="indefinite" />
                        </circle>

                        <g transform="translate(275, 135)">
                          <rect x="-22" y="-9" width="44" height="14" rx="7" fill="#C5A059" opacity="0.12" />
                          <text x="0" y="1" textAnchor="middle" fill="#C5A059" fontSize="9" fontWeight="bold">
                            8 MILES
                          </text>
                        </g>

                        <g>
                          <circle cx="220" cy="150" r="14" fill="none" stroke="#C5A059" strokeWidth="0.8" opacity="0.3">
                            <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="220" cy="150" r="9" fill="#C5A059" stroke="#0A0A0F" strokeWidth="2" />
                          <text x="220" y="153" textAnchor="middle" fill="#0A0A0F" fontSize="7" fontWeight="bold">
                            AD
                          </text>
                          <text x="220" y="175" textAnchor="middle" fill="#C5A059" fontSize="8" fontWeight="bold">
                            AMERICAN DREAM
                          </text>
                        </g>

                        <g>
                          <circle cx="320" cy="150" r="14" fill="none" stroke="#EF4444" strokeWidth="0.8" opacity="0.3">
                            <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite" begin="0.5s" />
                          </circle>
                          <circle cx="320" cy="150" r="8" fill="#EF4444" stroke="#0A0A0F" strokeWidth="2" />
                          <text x="320" y="153" textAnchor="middle" fill="#0A0A0F" fontSize="6" fontWeight="bold">
                            NYC
                          </text>
                          <text x="320" y="175" textAnchor="middle" fill="#EF4444" fontSize="8" fontWeight="bold">
                            MANHATTAN
                          </text>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex-shrink-0 border-t border-white/10 p-4 bg-black/30">
                  <p className="text-white/20 text-[10px] text-center tracking-wider">Direct access via Lincoln Tunnel, GW Bridge, and NJ Transit</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
