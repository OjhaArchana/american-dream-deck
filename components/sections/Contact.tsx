"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const paths = [
  {
    title: "Lease a Space",
    subtitle: "Retail, F&B, Flagship & Pop-Up",
    desc: "Join 450+ brands in North America's highest-footfall destination. Segmented leasing paths for every category.",
    cta: "Explore Leasing",
    href: "/leasing",
    stat: "Now Leasing",
    statDetail: "180+ flagship locations • 200+ mid-tier • 50+ pop-up",
  },
  {
    title: "Become a Sponsor",
    subtitle: "Brand Partnerships & Activations",
    desc: "Reach 40M+ annual visitors through premium sponsorship tiers, naming rights, and immersive brand activations.",
    cta: "View Opportunities",
    href: "/sponsorship",
    stat: "Custom packages available",
    statDetail: "Naming rights • Title sponsors • Activation zones",
  },
  {
    title: "Book a Venue",
    subtitle: "Events, Concerts & Conventions",
    desc: "500K+ event attendees per year. Three dedicated venues, 20,000-person capacity, 365 days available.",
    cta: "Book Now",
    href: "#events",
    stat: "Inquiry response within 48h",
    statDetail: "3 venues • 20K capacity • 365 days/year",
  },
];

export default function Contact({ goTo }: { goTo: (index: number) => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="partner" className="bg-black text-white px-6 md:px-13 py-12 md:py-16 h-full overflow-y-auto">
      <div className="w-full max-w-[1700px] mx-auto">
        
        {/* Header - Compact */}
        <div className="text-center mb-8">
          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#C5A059]/60 text-[10px] tracking-[0.3em] uppercase mb-2"
          >
            Chapter Final
          </motion.p> */}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light"
          >
            Ready to Be <span className="gold-text italic">Part of This?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            Three paths to commercial partnership. Each connects your brand to 40M+ visitors 
            at the most-talked-about destination in the NY metro area.
          </motion.p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {paths.map((path, i) => {
            const isHovered = hoveredIndex === i;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative bg-gradient-to-b from-black to-zinc-950 
                  rounded-xl overflow-hidden cursor-pointer
                  border transition-all duration-500
                  ${isHovered 
                    ? "border-[#C5A059]/50 shadow-2xl shadow-[#C5A059]/10 -translate-y-2" 
                    : "border-white/10 hover:border-white/20"
                  }
                `}
              >
                {/* Card Content - Compact by default, expands on hover */}
                <div className="p-6 md:p-7">
                  {/* Subtitle Badge */}
                  <div className="mb-4">
                    <span className="text-[#C5A059]/70 text-[10px] tracking-[0.2em] uppercase">
                      {path.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-light text-white mb-3">
                    {path.title}
                  </h3>

                  {/* Description - Limited lines, expands on hover */}
                  <motion.div
                    animate={{ 
                      height: isHovered ? "auto" : "auto",
                    }}
                    className="relative"
                  >
                    <p className={`
                      text-white/50 text-sm leading-relaxed
                      ${!isHovered ? "line-clamp-2" : ""}
                    `}>
                      {path.desc}
                    </p>
                    
                    {/* Expanded details - Only visible on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="mt-4 pt-4 border-t border-white/10"
                        >
                          <p className="text-white/40 text-xs leading-relaxed">
                            {path.statDetail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Bottom Section - Always visible but compact */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      {/* Stat badge - compact */}
                      <span className={`
                        text-[9px] font-mono transition-all duration-300
                        ${isHovered ? "text-[#C5A059]" : "text-white/30"}
                      `}>
                        {path.stat}
                      </span>

                      {/* CTA Button - compact, expands slightly on hover */}
                      <motion.button
                        onClick={() => {
                          if (path.title === "Lease a Space") goTo(2);
                          if (path.title === "Become a Sponsor") goTo(7);
                          if (path.title === "Book a Venue") goTo(6);
                        }}
                        animate={{
                          paddingLeft: isHovered ? "1.25rem" : "1rem",
                          paddingRight: isHovered ? "1.25rem" : "1rem",
                        }}
                        className={`
                          text-[10px] tracking-widest uppercase 
                          transition-all duration-500 flex items-center gap-1
                          ${isHovered 
                            ? "text-[#C5A059]" 
                            : "text-white/50 hover:text-white/80"
                          }
                        `}
                      >
                        {path.cta}
                        <motion.span
                          animate={{ x: isHovered ? 4 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#C5A059]/5 via-transparent to-transparent"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Footer strip - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/20 text-[10px] tracking-widest uppercase">
            © American Dream · East Rutherford, New Jersey
          </p>
          <p className="text-white/20 text-[10px]">
            americandream.com · commercial@americandream.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}