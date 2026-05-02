"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const brands = [
  { name: "APPLE", logo: "/images/logo/apple.png", hasColor: false },
  { name: "NIKE", logo: "/images/logo/nike.png", hasColor: false },
  { name: "ZARA", logo: "/images/logo/zara.jpg", hasColor: true },
  { name: "UNIQLO", logo: "/images/logo/uniqlo.png", hasColor: true },
  { name: "LEGO", logo: "/images/logo/lego.png", hasColor: true },
  { name: "ADIDAS", logo: "/images/logo/adidas.png", hasColor: false },
  { name: "H&M", logo: "/images/logo/h&m.png", hasColor: true },
  { name: "SEPHORA", logo: "/images/logo/sephora.png", hasColor: false },
];

const leasingPaths = [
  {
    type: "Flagship Stores",
    sqft: "2,000 – 10,000 sq ft",
    desc: "Anchor positions in our highest-footfall corridors. Join Apple, Nike, and Zara in spaces designed for brand storytelling at scale.",
    stat: "180+ flagship locations",
    href: "/leasing/flagship",
  },
  {
    type: "Mid-Tier Retail",
    sqft: "500 – 3,000 sq ft",
    desc: "Strong conversion zones with consistent daily footfall. Ideal for established brands looking for regional presence.",
    stat: "200+ mid-tier tenants",
    href: "/leasing/midtier",
  },
  {
    type: "Pop-Up Spaces",
    sqft: "100 – 500 sq ft",
    desc: "Flexible short-term positions for launches, campaigns, and seasonal activations. Move fast, test new markets.",
    stat: "50+ pop-up positions available",
    href: "/leasing/popup",
  },
];

// ── Brand tile: name by default → logo on hover ──────────────────────────────
function BrandTile({ brand }: { brand: (typeof brands)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-shrink-0 w-[150px] px-8 py-4 border-r border-white/10
                 flex flex-col items-center justify-center gap-3 cursor-pointer"
    >
      <div className="relative w-[80px] h-[38px] flex items-center justify-center">
        <span
          className="absolute inset-0 flex items-center justify-center
                     text-xs tracking-[0.25em] font-medium"
          style={{
            opacity: hovered ? 0 : 1,
            color: "rgba(255,255,255,0.55)",
            transition: "opacity 350ms ease",
            whiteSpace: "nowrap",
            fontSize: brand.name.length > 6 ? "10px" : "12px",
          }}
        >
          {brand.name}
        </span>

        {brand.hasColor ? (
          <img
            src={brand.logo}
            alt={brand.name}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 350ms ease",
            }}
          />
        ) : (
          <img
            src={brand.logo}
            alt={brand.name}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              filter: "brightness(0) invert(1)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 350ms ease",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function Retail() {
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopUpFilter, setShowPopUpFilter] = useState(false);
  const [popUpFilters, setPopUpFilters] = useState({
    budget: "medium",
    duration: "3months",
    footfall: "high",
  });

  return (
    <section id="retail" className="min-h-screen flex items-center bg-zinc-950 text-white px-6 py-20 md:px-20 md:py-24">
      <div className="w-full max-w-[1700px] mx-auto">
        {/* Brand ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden mb-6 border-b border-white/10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Chapter Marker - REMOVED the line above "450+ Brands..." by removing the <p> tag */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <motion.h2
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-4xl md:text-6xl font-light"
            >
              450+ Brands.
              <br />
              <span className="gold-text">One Destination.</span>
            </motion.h2>
          </motion.div>

          {/* Interactive Selector — "The Offer" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-white/40 text-center text-xs tracking-widest uppercase mb-4">How do you want to be here?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {leasingPaths.map((path, idx) => (
                <motion.button
                  key={path.type}
                  onClick={() => setSelectedOffer(selectedOffer === idx ? null : idx)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-3 text-xs tracking-wider uppercase rounded-full transition-all duration-300 ${
                    selectedOffer === idx 
                      ? "bg-[#C5A059] text-black" 
                      : "border border-white/20 text-white/60 hover:text-white hover:border-white/40"
                  }`}
                >
                  {path.type}
                </motion.button>
              ))}
            </div>
            
            <AnimatePresence>
              {selectedOffer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-6 bg-white/5 border border-[#C5A059]/20 rounded-xl text-center"
                >
                  <p className="text-[#C5A059] text-sm mb-2">{leasingPaths[selectedOffer].sqft}</p>
                  <p className="text-white/70 text-sm">{leasingPaths[selectedOffer].desc}</p>
                  <p className="text-white/40 text-xs mt-3">{leasingPaths[selectedOffer].stat}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Interactive Pop-Up Filter — Refined copy and button styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <div className="text-center mb-4">
              <p className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase">Instant Availability</p>
              <p className="text-white/40 text-sm">Tell us your needs — we'll match you with available spaces</p>
            </div>

            <button
              onClick={() => setShowPopUpFilter(true)}
              className="group w-full py-4 bg-gradient-to-r from-[#C5A059]/10 to-transparent border border-[#C5A059]/30 text-[#C5A059] text-xs tracking-widest uppercase rounded-xl hover:bg-[#C5A059] hover:text-black transition-all duration-500 flex items-center justify-center gap-3"
            >
              <span className="text-lg">🔍</span>
              Find Your Perfect Space
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </motion.div>

          {/* Pop-Up Filter Modal */}
          <AnimatePresence>
            {showPopUpFilter && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
                onClick={() => setShowPopUpFilter(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-lg bg-[#111118] border border-white/10 rounded-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6 border-b border-white/10">
                    <h3 className="text-xl font-light text-white">Find Your Space</h3>
                    <p className="text-white/40 text-xs mt-1">50+ positions available — filter to find yours</p>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Budget Filter */}
                    <div>
                      <label className="text-white/60 text-xs tracking-wider uppercase block mb-3">Monthly Budget</label>
                      <div className="flex gap-3">
                        {[
                          { value: "low", label: "$2k-5k", sqft: "100-200 sq ft" },
                          { value: "medium", label: "$5k-15k", sqft: "200-500 sq ft" },
                          { value: "high", label: "$15k-30k+", sqft: "500-1,000+ sq ft" },
                        ].map((budget) => (
                          <button
                            key={budget.value}
                            onClick={() => setPopUpFilters({ ...popUpFilters, budget: budget.value })}
                            className={`flex-1 py-3 text-center text-xs rounded-lg transition-all duration-300 ${
                              popUpFilters.budget === budget.value
                                ? "bg-[#C5A059] text-black"
                                : "border border-white/20 text-white/60 hover:border-white/40"
                            }`}
                          >
                            {budget.label}
                            <span className="block text-[8px] opacity-60">{budget.sqft}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Duration Filter */}
                    <div>
                      <label className="text-white/60 text-xs tracking-wider uppercase block mb-3">Duration</label>
                      <div className="flex gap-3">
                        {[
                          { value: "1month", label: "1 Month", ideal: "Product Launch" },
                          { value: "3months", label: "3 Months", ideal: "Seasonal" },
                          { value: "6months", label: "6+ Months", ideal: "Test Market" },
                        ].map((duration) => (
                          <button
                            key={duration.value}
                            onClick={() => setPopUpFilters({ ...popUpFilters, duration: duration.value })}
                            className={`flex-1 py-3 text-center text-xs rounded-lg transition-all duration-300 ${
                              popUpFilters.duration === duration.value
                                ? "bg-[#C5A059] text-black"
                                : "border border-white/20 text-white/60 hover:border-white/40"
                            }`}
                          >
                            {duration.label}
                            <span className="block text-[8px] opacity-60">{duration.ideal}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Footfall Filter */}
                    <div>
                      <label className="text-white/60 text-xs tracking-wider uppercase block mb-3">Desired Footfall</label>
                      <div className="flex gap-3">
                        {[
                          { value: "medium", label: "5k-15k" },
                          { value: "high", label: "15k-30k" },
                          { value: "premium", label: "30k+", location: "Entertainment Plaza" },
                        ].map((footfall) => (
                          <button
                            key={footfall.value}
                            onClick={() => setPopUpFilters({ ...popUpFilters, footfall: footfall.value })}
                            className={`flex-1 py-3 text-center text-xs rounded-lg transition-all duration-300 ${
                              popUpFilters.footfall === footfall.value
                                ? "bg-[#C5A059] text-black"
                                : "border border-white/20 text-white/60 hover:border-white/40"
                            }`}
                          >
                            {footfall.label} daily
                            {footfall.location && (
                              <span className="block text-[8px] opacity-60">{footfall.location}</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Results Preview */}
                    <div className="bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-lg p-4">
                      <p className="text-[#C5A059] text-xs font-mono mb-2">✨ Matching Spaces</p>
                      {popUpFilters.budget === "low" && (
                        <p className="text-white/70 text-sm">• Pop-Up Row — 150 sq ft, 8k daily footfall</p>
                      )}
                      {popUpFilters.budget === "medium" && (
                        <>
                          <p className="text-white/70 text-sm">• Grand Atrium Kiosk — 350 sq ft, 22k daily footfall</p>
                          <p className="text-white/70 text-sm">• Dining District Pop-Up — 280 sq ft, 18k daily footfall</p>
                        </>
                      )}
                      {popUpFilters.budget === "high" && (
                        <>
                          <p className="text-white/70 text-sm">• Entertainment Plaza — 850 sq ft, 45k daily footfall</p>
                          <p className="text-white/70 text-sm">• Luxury Wing Activation — 600 sq ft, 28k daily footfall</p>
                        </>
                      )}
                      <p className="text-white/30 text-[10px] mt-2">+ 12 more spaces matching your criteria</p>
                    </div>
                  </div>

                  <div className="p-6 border-t border-white/10 flex gap-4">
                    <button
                      onClick={() => setShowPopUpFilter(false)}
                      className="flex-1 py-3 border border-white/20 text-white/60 text-xs tracking-widest uppercase hover:border-white/40 transition rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setShowPopUpFilter(false);
                        alert("Thanks! A leasing representative will contact you with available spaces matching your criteria.");
                      }}
                      className="flex-1 py-3 bg-[#C5A059] text-black text-xs tracking-widest uppercase hover:bg-[#E8D5A3] transition rounded-lg"
                    >
                      Find My Space →
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fade edges */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-28
                        bg-gradient-to-r from-zinc-950 to-transparent z-10"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-28
                        bg-gradient-to-l from-zinc-950 to-transparent z-10"
          />

          {/* Scrolling reel */}
          <motion.div
            className="flex"
            animate={isPaused ? {} : { x: ["0%", "-50%"] }}
            transition={{
              duration: 32,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <BrandTile key={`${brand.name}-${i}`} brand={brand} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}