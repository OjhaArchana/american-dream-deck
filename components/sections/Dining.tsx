"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedStats from "@/components/ui/AnimatedStats";

const categories = [
  {
    name: "Fine Dining",
    desc: "White-tablecloth experiences from acclaimed chefs.",
    count: "8 restaurants",
    image: "/images/ai-generated/fine-dining.png",
  },
  {
    name: "Fast Casual",
    desc: "Premium quick-service for high-velocity footfall zones.",
    count: "40+ concepts",
    image: "/images/ai-generated/casual-dining.png",
  },
  {
    name: "Desserts & Cafes",
    desc: "Artisan coffee, patisseries, and destination dessert brands.",
    count: "15 concepts",
    image: "/images/ai-generated/cafes-restaurants.png",
  },
  {
    name: "International Cuisine",
    desc: "Global flavors curated for a diverse, sophisticated audience.",
    count: "20+ cuisines",
    image: "/images/ai-generated/international-cuisine.png",
  },
];

// Looping stats data
const loopingStats = [
  { value: 47, suffix: "%", label: "more time on-property for dining guests", glow: true },
  { value: 3, suffix: "x", label: "more likely to make unplanned retail purchase", glow: true },
  { value: 100, suffix: "+", label: "total dining options", glow: false },
  { value: 125, suffix: " min", label: "average dwell time when dining", glow: false },
];

function DiningCard({
  cat,
  index,
}: {
  cat: (typeof categories)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="bg-zinc-950 group hover:bg-white/5 transition-colors duration-300 cursor-default h-full"
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-zinc-900">
        <img
          src={cat.image}
          alt={cat.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
      </div>

      <div className="p-4 md:p-5">
        <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">
          {cat.count}
        </p>
        <h3 className="text-white font-light text-base md:text-lg mb-1">{cat.name}</h3>
        <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{cat.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Dining() {
  const [showInsight, setShowInsight] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  // Loop through stats every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % loopingStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentStat = loopingStats[currentStatIndex];

  return (
    <section id="dining" className="h-full bg-zinc-950 text-white flex flex-col justify-center overflow-hidden">
      <div className="px-6 md:px-20 py-8 md:py-12">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-4">
          {/* Left: Heading */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#C5A059]/60 text-[10px] tracking-[0.3em] uppercase mb-2"
            >
              Dining & Lifestyle
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-light"
            >
              Food as a
              <br />
              <span className="italic gold-text">Destination</span>
            </motion.h2>
          </div>

          {/* Right: Looping Animated Stat Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-80 lg:w-96"
          >
            <div className="border border-[#C5A059]/30 rounded-xl bg-gradient-to-br from-black/60 to-[#C5A059]/5 p-4 text-center shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStatIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className={`text-3xl md:text-4xl font-light mb-1 ${currentStat.glow ? "text-[#C5A059] drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]" : "text-white"}`}>
                    {currentStat.value}{currentStat.suffix}
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed whitespace-nowrap">
                    {currentStat.label}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-3">
                {loopingStats.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStatIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentStatIndex === idx 
                        ? "w-4 bg-[#C5A059]" 
                        : "w-1 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards Grid - Compact to fit in one page */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {categories.map((cat, i) => (
            <DiningCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>       
      </div>
    </section>
  );
}