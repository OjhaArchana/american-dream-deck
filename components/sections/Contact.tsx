"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const paths = [
  {
    title: "Lease a Space",
    subtitle: "Retail, F&B, Flagship & Pop-Up",
    desc: "Join 450+ brands in North America's highest-footfall destination. Segmented leasing paths for every category.",
    cta: "Explore Leasing",
    stat: "Now Leasing",
    statDetail: "180+ flagship • 200+ mid-tier • 50+ pop-up",
    successStories: [{ brand: "Nike", metric: "340%↑ foot traffic" }]
  },
  {
    title: "Become a Sponsor",
    subtitle: "Brand Partnerships & Activations",
    desc: "Reach 40M+ annual visitors through premium sponsorship tiers, naming rights, and immersive brand activations.",
    cta: "View Opportunities",
    stat: "Custom packages",
    statDetail: "Naming rights • Title sponsors • Activation zones",
    successStories: [{ brand: "Coca-Cola", metric: "8M+ impressions" }]
  },
  {
    title: "Book a Venue",
    subtitle: "Events, Concerts & Conventions",
    desc: "500K+ event attendees per year. Three dedicated venues, 20,000-person capacity, 365 days available.",
    cta: "Book Now",
    stat: "48h response",
    statDetail: "3 venues • 20K capacity • 365 days",
    successStories: [{ brand: "ArenaBowl", metric: "15K+ attendees" }]
  },
];

const testimonials = [
  { text: "Since opening our flagship, foot traffic is up 340%", brand: "Nike" },
  { text: "Our pop-up generated 15,000+ visits in 2 weeks", brand: "Emerging Brand" },
  { text: "Sales exceeded projections by 200%", brand: "Luxury Retailer" },
];

export default function Contact({ goTo }: { goTo: (index: number) => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardSelection, setWizardSelection] = useState({ path: "", spaceType: "", timeline: "" });
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="partner" className="h-full w-full bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 lg:py-20 h-full flex flex-col justify-center">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light"
          >
            Ready to Be <span className="gold-text italic">Part of This?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-sm md:text-base max-w-2xl mx-auto mt-3 md:mt-4"
          >
            Three paths to commercial partnership. Each connects your brand to 40M+ visitors 
            at the most-talked-about destination in the NY metro area.
          </motion.p>
        </div>

        {/* Success Stories Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 md:mb-4"
        >
          <div className="bg-gradient-to-r from-[#C5A059]/10 to-transparent border-l-4 border-[#C5A059] p-4 rounded-r-xl">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <span className="text-[#C5A059] text-[10px] tracking-wider uppercase">⭐ Success Story</span>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={testimonialIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-white/70 text-sm md:text-base"
                  >
                    "{testimonials[testimonialIndex].text}"
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="flex gap-1">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      testimonialIndex === idx ? "w-5 bg-[#C5A059]" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-white/40 text-xs mt-2 ml-8">
              — {testimonials[testimonialIndex].brand}
            </p>
          </div>
        </motion.div>

        {/* Find Your Path Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-5 md:mb-5"
        >
          <button
            onClick={() => setShowWizard(true)}
            className="group px-6 md:px-8 py-2 md:py-3 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs md:text-sm tracking-widest uppercase rounded-full hover:bg-[#C5A059] hover:text-black transition-all duration-500 flex items-center justify-center gap-3"
          >
            <span className="text-base md:text-lg">✨</span>
            Find Your Perfect Path
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {paths.map((path, i) => {
            const isHovered = hoveredIndex === i;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative bg-gradient-to-b from-black to-zinc-950 
                  rounded-xl overflow-hidden cursor-pointer
                  border transition-all duration-500 flex flex-col h-full
                  ${isHovered 
                    ? "border-[#C5A059]/50 shadow-2xl shadow-[#C5A059]/10 -translate-y-1" 
                    : "border-white/10 hover:border-white/20"
                  }
                `}
              >
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  {/* Subtitle Badge */}
                  <div className="mb-3">
                    <span className="text-[#C5A059]/60 text-[9px] tracking-[0.2em] uppercase">
                      {path.subtitle.split(" • ")[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-light text-white mb-3">
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                    {path.desc}
                  </p>

                  {/* Hover expanded details */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-3 border-t border-white/10"
                      >
                        <p className="text-white/40 text-xs leading-relaxed">
                          {path.statDetail}
                        </p>
                        <p className="text-[#C5A059] text-[10px] mt-2">
                          📈 {path.successStories[0].metric} — {path.successStories[0].brand}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Section - pushes to bottom */}
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className={`
                        text-[10px] font-mono transition-all duration-300
                        ${isHovered ? "text-[#C5A059]" : "text-white/30"}
                      `}>
                        {path.stat}
                      </span>

                      <motion.button
                        onClick={() => {
                          if (path.title === "Lease a Space") goTo(2);
                          if (path.title === "Become a Sponsor") goTo(7);
                          if (path.title === "Book a Venue") goTo(6);
                        }}
                        animate={{
                          paddingLeft: isHovered ? "1rem" : "0.75rem",
                          paddingRight: isHovered ? "1rem" : "0.75rem",
                        }}
                        className={`
                          text-[10px] tracking-widest uppercase 
                          transition-all duration-300 flex items-center gap-1
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

                {/* Hover gradient */}
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

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 md:mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="text-white/20 text-[10px] tracking-widest uppercase">
            © American Dream · East Rutherford, New Jersey
          </p>
          <p className="text-white/20 text-[10px]">
            americandream.com · commercial@americandream.com
          </p>
        </motion.div>

        {/* Wizard Modal */}
        <AnimatePresence>
          {showWizard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setShowWizard(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative w-full max-w-md bg-[#111118] border border-white/10 rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-5 border-b border-white/10">
                  <h3 className="text-xl font-light text-white">Find Your Perfect Space</h3>
                  <p className="text-white/40 text-xs mt-1">Step {wizardStep} of 3</p>
                </div>

                <div className="p-5">
                  {wizardStep === 1 && (
                    <div className="space-y-3">
                      <p className="text-white/60 text-sm mb-3">What brings you to American Dream?</p>
                      {paths.map((path, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setWizardSelection({ ...wizardSelection, path: path.title });
                            setWizardStep(2);
                          }}
                          className="w-full p-3 text-left border border-white/10 rounded-lg hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all"
                        >
                          <p className="text-white font-medium">{path.title}</p>
                          <p className="text-white/40 text-xs">{path.subtitle}</p>
                        </button>
                      ))}
                    </div>
                  )}

                  {wizardStep === 2 && (
                    <div className="space-y-3">
                      <p className="text-white/60 text-sm mb-3">What space type interests you?</p>
                      {["Flagship Store", "Mid-Tier Retail", "Pop-Up Space", "Sponsorship Package", "Event Venue"].map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setWizardSelection({ ...wizardSelection, spaceType: type });
                            setWizardStep(3);
                          }}
                          className="w-full p-3 text-left border border-white/10 rounded-lg hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all"
                        >
                          <p className="text-white font-medium">{type}</p>
                        </button>
                      ))}
                    </div>
                  )}

                  {wizardStep === 3 && (
                    <div className="space-y-3">
                      <p className="text-white/60 text-sm mb-3">When are you looking to start?</p>
                      {["Immediately (0-3 months)", "Soon (3-6 months)", "Planning (6-12 months)", "Just exploring"].map((timeline) => (
                        <button
                          key={timeline}
                          onClick={() => {
                            alert(`✨ Thanks for your interest!\n\nPath: ${wizardSelection.path}\nSpace: ${wizardSelection.spaceType}\nTimeline: ${timeline}\n\nA leasing representative will contact you within 24 hours.`);
                            setShowWizard(false);
                            setWizardStep(1);
                            setWizardSelection({ path: "", spaceType: "", timeline: "" });
                          }}
                          className="w-full p-3 text-left border border-white/10 rounded-lg hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all"
                        >
                          <p className="text-white font-medium">{timeline}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-5 border-t border-white/10 flex justify-between">
                  {wizardStep > 1 && (
                    <button onClick={() => setWizardStep(wizardStep - 1)} className="text-white/40 text-sm hover:text-white transition">
                      ← Back
                    </button>
                  )}
                  <button onClick={() => setShowWizard(false)} className="ml-auto text-white/40 text-sm hover:text-white transition">
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}