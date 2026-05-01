"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LuxuryHeatmapToggleProps {
  onInquire?: () => void;
}

export default function LuxuryHeatmapToggle({ onInquire }: LuxuryHeatmapToggleProps) {
  const [viewMode, setViewMode] = useState<"retail" | "heatmap">("retail");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Visitor flow data
  const flowData = {
    fromWaterPark: 68,
    fromThemePark: 72,
    fromSkiSlope: 45,
    avgDwellTime: 45,
    conversionRate: 34,
  };

  const luxuryBrands = [
    { name: "Hermès", location: "Luxury Wing East", footfall: 12400, available: false },
    { name: "Tiffany & Co.", location: "Luxury Wing Central", footfall: 18200, available: false },
    { name: "Dolce & Gabbana", location: "Luxury Wing West", footfall: 9800, available: true },
    { name: "Moncler", location: "Luxury Wing North", footfall: 7600, available: true },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-12">
      {/* Toggle Switch */}
      <div className="flex justify-center mb-6">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1 flex gap-1">
          <button
            onClick={() => setViewMode("retail")}
            className={`px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 ${
              viewMode === "retail" ? "bg-[#C5A059] text-black" : "text-white/60 hover:text-white/90"
            }`}
          >
            Retail View
          </button>
          <button
            onClick={() => setViewMode("heatmap")}
            className={`px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 ${
              viewMode === "heatmap" ? "bg-[#C5A059] text-black" : "text-white/60 hover:text-white/90"
            }`}
          >
            Visitor Flow ⚡
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* RETAIL VIEW */}
        {viewMode === "retail" && (
          <motion.div
            key="retail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="border border-white/10 rounded-xl overflow-hidden bg-black/40"
          >
            <div className="relative h-[300px] bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F]">
              {/* Simulated luxury wing floor plan */}
              <div className="absolute inset-0 p-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {luxuryBrands.map((brand, i) => (
                    <motion.div
                      key={brand.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      onMouseEnter={() => setSelectedBrand(brand.name)}
                      onMouseLeave={() => setSelectedBrand(null)}
                      className={`relative rounded-lg border-2 p-4 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
                        brand.available
                          ? "border-[#C5A059]/50 hover:border-[#C5A059] bg-[#C5A059]/5"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <p className="text-white font-light text-lg">{brand.name}</p>
                      <p className="text-white/40 text-[10px] uppercase mt-1">{brand.location}</p>
                      <p className="text-white/30 text-[10px] mt-2">
                        {brand.footfall.toLocaleString()} daily visitors
                      </p>
                      {brand.available && (
                        <span className="absolute top-2 right-2 text-[8px] bg-[#C5A059] text-black px-2 py-0.5 rounded-full">
                          Available
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tooltip */}
              <AnimatePresence>
                {selectedBrand && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
                  >
                    <span className="text-white/80 text-xs">
                      {luxuryBrands.find(b => b.name === selectedBrand)?.available 
                        ? "✨ Space available — inquire now" 
                        : "🔒 Currently leased"}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* HEATMAP VIEW — THE "I NEED TO BE HERE" MOMENT */}
        {viewMode === "heatmap" && (
          <motion.div
            key="heatmap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="border border-[#C5A059]/30 rounded-xl overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F] shadow-[0_0_30px_rgba(197,160,89,0.15)]"
          >
            {/* Hero Stat Banner */}
            <div className="bg-[#C5A059]/10 border-b border-[#C5A059]/20 px-6 py-4">
              <div className="text-center">
                <p className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase mb-1">
                  The Insight That Changes Everything
                </p>
                <p className="text-white text-lg md:text-2xl font-light">
                  68% of luxury visitors come after{" "}
                  <span className="text-[#C5A059] font-medium">2+ hours of entertainment</span>
                </p>
              </div>
            </div>

            {/* Heatmap Visualization */}
            <div className="p-6">
              <div className="relative h-[280px] rounded-lg overflow-hidden">
                {/* Background — Luxury Wing Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E]">
                  {/* Entertainment zones (left side) */}
                  <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-purple-500/20 to-transparent">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">🎢</span>
                        </div>
                        <p className="text-purple-300/80 text-xs">Theme Park</p>
                        <p className="text-purple-300/50 text-[10px]">72% flow to luxury</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flow arrows animation */}
                  <div className="absolute left-1/3 top-1/2 w-1/4 h-px">
                    <motion.div
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute w-2 h-2 rounded-full bg-[#C5A059]"
                    />
                  </div>

                  {/* Luxury District (right side) */}
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#C5A059]/30 to-transparent">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] flex items-center justify-center mx-auto mb-2 animate-pulse">
                          <span className="text-3xl">💎</span>
                        </div>
                        <p className="text-[#C5A059] text-sm font-light">Luxury District</p>
                        <p className="text-[#C5A059]/60 text-[10px]">45 min avg dwell</p>
                      </div>
                    </div>
                  </div>

                  {/* Heatmap overlay dots */}
                  <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.6 }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="absolute w-1 h-1 rounded-full bg-[#C5A059]"
                        style={{
                          left: `${30 + Math.random() * 40}%`,
                          top: `${20 + Math.random() * 60}%`,
                          opacity: 0.3 + Math.random() * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-[#C5A059] text-2xl font-light">{flowData.fromWaterPark}%</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">from Water Park</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-[#C5A059] text-2xl font-light">{flowData.fromThemePark}%</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">from Theme Park</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-[#C5A059] text-2xl font-light">{flowData.avgDwellTime} min</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">Avg Dwell in Luxury</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-[#C5A059] text-2xl font-light">{flowData.conversionRate}%</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">Entertainment → Purchase</p>
                </div>
              </div>

              {/* The Punchline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-lg text-center"
              >
                <p className="text-white/70 text-sm">
                  <span className="text-[#C5A059] font-bold">Your customers are already here.</span> They arrive for the 
                  entertainment — and they leave with luxury bags. The only question: 
                  <span className="text-white"> will they walk past your store or into it?</span>
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={onInquire}
                className="mt-6 w-full py-3 bg-[#C5A059] text-black text-xs tracking-widest uppercase hover:bg-[#E8D5A3] transition-all duration-300 rounded-lg"
              >
                Secure Your Luxury Space — Available Now →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}