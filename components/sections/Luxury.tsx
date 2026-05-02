"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LuxuryHeatmapToggle from "@/components/ui/LuxuryHeatmapToggle";

const brands = [
  {
    name: "Hermès",
    note: "Leather Goods & Accessories",
    image: "/images/ai-generated/hermes.png",
  },
  {
    name: "Tiffany & Co.",
    note: "Fine Jewelry",
    image: "/images/ai-generated/tiffany.png",
  },
  {
    name: "Dolce & Gabbana",
    note: "Luxury Fashion",
    image: "/images/ai-generated/dolce-gabbana.png",
  },
  {
    name: "Moncler",
    note: "Luxury Outerwear",
    image: "/images/ai-generated/moncler.png",
  },
];

const INTERVAL_MS = 4000;

export default function Luxury() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [imgsLoaded, setImgsLoaded] = useState<boolean[]>(new Array(brands.length).fill(false));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heatmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const statuses = new Array(brands.length).fill(false);
    brands.forEach((brand, i) => {
      const img = new window.Image();
      img.onload = () => {
        statuses[i] = true;
        setImgsLoaded([...statuses]);
      };
      img.onerror = () => {
        statuses[i] = true;
        setImgsLoaded([...statuses]);
      };
      img.src = brand.image;
    });
  }, []);

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, INTERVAL_MS);
  };

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!imgsLoaded[0]) return;
    startInterval();
    return stopInterval;
  }, [imgsLoaded[0]]);

  const handleBrandClick = (i: number) => {
    setActiveIndex(i);
    startInterval();
  };

  const scrollToHeatmap = () => {
    heatmapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="luxury" className="bg-black text-white">
      {/* Main Luxury Section */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* LEFT: Image Panel */}
        <div className="md:w-1/2 relative overflow-hidden min-h-[60vh] md:min-h-screen">
          {brands.map((brand, i) => (
            <div
              key={brand.image}
              className="absolute inset-0"
              style={{
                opacity: i === activeIndex ? 1 : 0,
                transition: "opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              {imgsLoaded[i] ? (
                <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" draggable={false} />
              ) : (
                <div className="w-full h-full bg-zinc-900" />
              )}
            </div>
          ))}
          <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
          <div className="absolute bottom-10 left-10 z-20 flex items-end gap-6">
            <div>
              <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-2">The Luxury Wing</p>
              <p className="text-white text-sm tracking-wide">American Dream, East Rutherford, NJ</p>
            </div>
            <div className="flex gap-2 pb-0.5">
              {brands.map((_, i) => (
                <button key={i} onClick={() => handleBrandClick(i)} className="focus:outline-none">
                  <div
                    className={`h-[5px] rounded-full ${i === activeIndex ? "w-6 bg-white" : "w-[5px] bg-white/30"}`}
                    style={{ transition: "width 400ms ease, background 400ms ease" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Text Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-14 md:py-16"
        >
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-4">Luxury</p>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight mb-5">
            Luxury
            <br />
            <span className="italic text-[#C5A059]">Redefined</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-7 max-w-sm">
            Where Manhattan&apos;s most discerning shoppers come when they leave Manhattan. 
            The only luxury retail environment in the metro area combining flagship presence with world-class entertainment.
          </p>

          {/* Brand rows */}
          <div className="space-y-0">
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                onClick={() => handleBrandClick(i)}
                className={`
                  flex items-center justify-between border-t py-3.5 cursor-pointer group transition-colors duration-500
                  ${i === activeIndex ? "border-white/50" : "border-white/10 hover:border-white/25"}
                `}
              >
                <span className={`font-light tracking-wide transition-colors duration-500 ${i === activeIndex ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                  {brand.name}
                </span>
                <span className="text-white/30 text-xs">{brand.note}</span>
              </motion.div>
            ))}
            <div className="border-t border-white/10" />
          </div>

          {/* CTA - Now redirects to heatmap section */}
          <motion.button
            onClick={scrollToHeatmap}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-6 self-start border border-[#C5A059]/30 text-[#C5A059] text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#C5A059] hover:text-black transition-all duration-500"
          >
            View Visitor Flow Data →
          </motion.button>

          {showPopup && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-zinc-900/80 backdrop-blur-lg border border-white/10 px-10 py-6 rounded-lg"
              >
                <p className="text-white text-sm tracking-widest uppercase">Inquiry Sent</p>
                <p className="text-white/40 text-xs mt-1">A representative will contact you</p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* 🔥 THE "I NEED TO BE HERE" MOMENT - Heatmap Toggle with ref */}
      <div ref={heatmapRef} className="border-t border-white/10 pt-16 pb-20 px-6 md:px-20 scroll-mt-20">
        <LuxuryHeatmapToggle 
          onInquire={() => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
          }}
        />
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-50 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-all duration-300 flex items-center justify-center shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </section>
  );
}