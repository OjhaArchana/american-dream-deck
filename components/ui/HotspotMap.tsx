"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Hotspot {
  id: string;
  name: string;
  type: "retail" | "luxury" | "dining" | "entertainment";
  x: number;
  y: number;
  description: string;
  sqft?: string;
  status: "available" | "leased" | "coming-soon";
  zone?: string;
}

// Updated hotspot positions based on actual floor plan layout
const hotspots: Hotspot[] = [
  { id: "1", name: "Nickelodeon Universe", type: "entertainment", x: 18, y: 22, description: "Thrilling rides, attractions, and family fun. 35 rides across 8 acres.", sqft: "200,000+", status: "available", zone: "Theme Park" },
  { id: "2", name: "DreamWorks Water Park", type: "entertainment", x: 25, y: 65, description: "Indoor water park with slides, waves, and tropical adventure. 1M+ gallons.", sqft: "150,000+", status: "available", zone: "Water Park" },
  { id: "3", name: "Luxury Wing", type: "luxury", x: 82, y: 28, description: "High-end fashion, jewelry, and exclusive brands. Hermès, Tiffany & Co., Dolce&Gabbana.", sqft: "2,000-8,000", status: "available", zone: "Luxury" },
  { id: "4", name: "Dining Terrace", type: "dining", x: 68, y: 72, description: "World-class cuisine, cafes, and gourmet eateries. 40+ concepts.", sqft: "500-2,000", status: "available", zone: "Dining" },
  { id: "5", name: "Entertainment Plaza", type: "entertainment", x: 45, y: 48, description: "Live events, immersive experiences, and nightlife.", sqft: "1,000-3,000", status: "coming-soon", zone: "Entertainment" },
  { id: "6", name: "Grand Atrium", type: "retail", x: 55, y: 52, description: "The heart of it all. Shopping, connections, and iconic moments.", sqft: "5,000-15,000", status: "available", zone: "Retail" },
  { id: "7", name: "Fashion Avenue", type: "retail", x: 72, y: 55, description: "Department stores and premium fashion retailers.", sqft: "10,000-20,000", status: "leased", zone: "Retail" },
  { id: "8", name: "The Garden Food Hall", type: "dining", x: 42, y: 78, description: "Curated international food experience.", sqft: "500-1,500", status: "available", zone: "Dining" },
];

const typeColors = {
  retail: "border-blue-500 bg-blue-500",
  luxury: "border-[#C5A059] bg-[#C5A059]",
  dining: "border-green-500 bg-green-500",
  entertainment: "border-purple-500 bg-purple-500",
};

const typeBgColors = {
  retail: "bg-blue-500/20",
  luxury: "bg-[#C5A059]/20",
  dining: "bg-green-500/20",
  entertainment: "bg-purple-500/20",
};

const statusLabels = {
  available: "Available",
  leased: "Leased",
  "coming-soon": "Coming Soon",
};

export default function HotspotMap({ onClose }: { onClose: () => void }) {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, type: "spring", damping: 25 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0A0F] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between p-5 md:p-6 border-b border-white/10 bg-black/50">
            <div>
              <h3 className="text-lg md:text-xl font-light text-white">
                Interactive <span className="gold-text">Floor Plan</span>
              </h3>
              <p className="text-white/40 text-[10px] md:text-xs tracking-wider mt-1">
                Hover over dots • Click to explore available spaces
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white text-2xl transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          {/* Map Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="relative aspect-[16/10] bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-xl overflow-hidden border border-white/10">
              
              {/* Floor Plan Image */}
              <img
                src="/images/ai-generated/floor-plan.png"
                alt="American Dream Floor Plan"
                className="w-full h-full object-contain"
                onLoad={() => setImageLoaded(true)}
              />

              {/* Hotspots with Better Visibility */}
              {hotspots.map((spot) => {
                const isHovered = hoveredId === spot.id;
                const isSelected = selectedHotspot?.id === spot.id;
                
                return (
                  <div
                    key={spot.id}
                    className="absolute"
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Main Hotspot Button */}
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: parseFloat(spot.id) * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => setHoveredId(spot.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => setSelectedHotspot(spot)}
                      className={`
                        relative flex items-center justify-center
                        w-5 h-5 md:w-6 md:h-6 rounded-full
                        border-2 ${typeColors[spot.type]}
                        ${typeBgColors[spot.type]}
                        transition-all duration-200
                        ${isSelected ? "ring-2 ring-white ring-offset-2 ring-offset-black" : ""}
                      `}
                    >
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white" />
                    </motion.button>

                    {/* Label - Always visible on hover or selected */}
                    {(isHovered || isSelected) && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute left-6 top-0 whitespace-nowrap z-20"
                      >
                        <div className="bg-black/90 backdrop-blur-md border border-white/15 rounded-lg px-3 py-1.5 shadow-xl">
                          <p className="text-white text-xs font-medium">{spot.name}</p>
                          <p className="text-[#C5A059] text-[9px]">{spot.type}</p>
                        </div>
                        {/* Pointer arrow */}
                        <div className="absolute -left-1.5 top-3 w-2 h-2 rotate-45 bg-black/90 border-l border-t border-white/15" />
                      </motion.div>
                    )}

                    {/* Pulsing ring for unclicked hotspots */}
                    {!isSelected && !isHovered && (
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border border-white/30 -z-10"
                      />
                    )}
                  </div>
                );
              })}

              {/* Zone Labels - Made more visible */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[8%] left-[12%] text-white/25 text-[10px] font-bold tracking-wider uppercase bg-black/30 px-2 py-0.5 rounded">
                  NICKELODEON UNIVERSE
                </div>
                <div className="absolute top-[45%] left-[22%] text-white/25 text-[10px] font-bold tracking-wider uppercase bg-black/30 px-2 py-0.5 rounded">
                  WATER PARK
                </div>
                <div className="absolute top-[15%] right-[10%] text-white/25 text-[10px] font-bold tracking-wider uppercase bg-black/30 px-2 py-0.5 rounded">
                  LUXURY WING
                </div>
                <div className="absolute top-[65%] left-[55%] text-white/25 text-[10px] font-bold tracking-wider uppercase bg-black/30 px-2 py-0.5 rounded">
                  DINING TERRACE
                </div>
                <div className="absolute bottom-[25%] right-[18%] text-white/25 text-[10px] font-bold tracking-wider uppercase bg-black/30 px-2 py-0.5 rounded">
                  ENTERTAINMENT
                </div>
                <div className="absolute top-[48%] left-[48%] text-white/20 text-[9px] font-mono bg-black/20 px-1.5 py-0.5 rounded">
                  GRAND ATRIUM
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-4 justify-center">
              {Object.entries(typeColors).map(([type, color]) => (
                <div key={type} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full border-2 ${color}`} />
                  <span className="text-white/50 text-xs capitalize">{type}</span>
                </div>
              ))}
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 border border-green-500 animate-pulse" />
                <span className="text-white/50 text-xs">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20 border border-white/30" />
                <span className="text-white/50 text-xs">Leased</span>
              </div>
            </div>

            {/* Selected Hotspot Details */}
            <AnimatePresence>
              {selectedHotspot && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-6 p-5 bg-gradient-to-r from-[#C5A059]/10 to-transparent border-l-4 border-[#C5A059] rounded-r-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-light text-white">{selectedHotspot.name}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          selectedHotspot.status === "available" 
                            ? "bg-green-500/20 text-green-400" 
                            : selectedHotspot.status === "leased"
                            ? "bg-white/10 text-white/40"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {statusLabels[selectedHotspot.status]}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm max-w-md">{selectedHotspot.description}</p>
                      {selectedHotspot.sqft && (
                        <p className="text-white/40 text-xs mt-2">📐 Size: {selectedHotspot.sqft} sq ft</p>
                      )}
                    </div>
                    {selectedHotspot.status === "available" && (
                      <button
                        onClick={() => {
                          alert(`✨ Inquiry sent for ${selectedHotspot.name}\nA leasing representative will contact you within 24 hours.`);
                          setSelectedHotspot(null);
                        }}
                        className="px-5 py-2 bg-[#C5A059] text-black text-xs tracking-wider uppercase rounded-full hover:bg-[#E8D5A3] transition-all whitespace-nowrap shadow-lg"
                      >
                        Inquire Now →
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 border-t border-white/5 p-3 bg-black/30">
            <p className="text-white/20 text-[8px] text-center">
              Click any gold, blue, green, or purple dot • Available spaces marked with pulse animation
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}