// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

// function Counter({
//   target,
//   prefix = "",
//   suffix = "",
// }: {
//   target: number;
//   prefix?: string;
//   suffix?: string;
// }) {
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (!inView) return;

//     let start = 0;
//     const duration = 1800;
//     const increment = target / (duration / 16);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [inView, target]);

//   return (
//     <span ref={ref}>
//       {prefix}
//       {count.toLocaleString()}
//       {suffix}
//     </span>
//   );
// }

// const stats = [
//   { value: 3000000, suffix: "+", label: "Square Feet", sub: "3x the size of Mall of America" },
//   { value: 450, suffix: "+", label: "Retail Tenants", sub: "From luxury flagships to pop-ups" },
//   { value: 40, suffix: "M+", label: "Annual Visitors", sub: "More than Disney World" },
//   { value: 125, suffix: " min", label: "Avg Dwell Time", sub: "Industry avg is 68 min" },
//   { value: 55, suffix: "%", label: "Entertainment Space", sub: "Unmatched in North America" },
//   { value: 8, suffix: " miles", label: "From Midtown Manhattan", sub: "20M+ metro catchment area" },
// ];

// const demographics = [
//   { label: "Ages 25-44", pct: 68 },
//   { label: "HHI $100K+", pct: 54 },
//   { label: "Return Visitors", pct: 71 },
//   { label: "College Educated", pct: 63 },
// ];

// export default function Property() {
//   return (
//     <section id="property" className="min-h-screen flex items-center bg-black text-white px-6 py-20 md:px-20 md:py-24">
//       <div className="w-full max-w-[1700px] mx-auto grid gap-8 lg:gap-9">
//         <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-14 items-center">
//           <div className="lg:pt-4">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-white/40 text-xs tracking-[0.4em] uppercase mb-5"
//             >
//               The Opportunity
//             </motion.p>

//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-6xl font-light max-w-2xl leading-tight mb-5"
//             >
//               Why American Dream Is Different
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.15 }}
//               className="text-white/45 text-sm md:text-base leading-relaxed max-w-xl"
//             >
//               Scale, entertainment, and proximity combine with a loyal audience built for high-intent retail, dining, and brand experiences.
//             </motion.p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="border border-white/10 p-5 md:p-7"
//           >
//             <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-2">
//               Visitor Profile
//             </p>
//             <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
//               A High-Value Audience
//             </h3>

//             <div className="space-y-4">
//               {demographics.map((d, i) => (
//                 <div key={d.label}>
//                   <div className="flex justify-between text-sm mb-2.5">
//                     <span className="text-white/70 tracking-wide">{d.label}</span>
//                     <span className="text-white">{d.pct}%</span>
//                   </div>
//                   <div className="h-px bg-white/10 relative overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${d.pct}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
//                       className="absolute inset-y-0 left-0 bg-white"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <p className="text-white/30 text-xs mt-6 tracking-wide">
//               Source: American Dream Property Analytics, 2024
//             </p>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-px bg-white/10 border border-white/10">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.08, duration: 0.6 }}
//               className="bg-black p-5 md:p-6 min-h-[150px] group hover:bg-white/5 transition-colors duration-300"
//             >
//               <p className="text-3xl md:text-4xl font-light text-white mb-3 whitespace-nowrap">
//                 <Counter target={stat.value} suffix={stat.suffix} />
//               </p>
//               <p className="text-white/80 text-sm tracking-wide mb-2">{stat.label}</p>
//               <p className="text-white/30 text-xs leading-relaxed">{stat.sub}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Counter({
  target,
  prefix = "",
  suffix = "",
  delay = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}) {
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
  { value: 3000000, suffix: "+", label: "Square Feet", sub: "3x the size of Mall of America", narrative: "This is massive." },
  { value: 450, suffix: "+", label: "Retail Tenants", sub: "From luxury flagships to pop-ups", narrative: "450+ brands under one roof." },
  { value: 40, suffix: "M+", label: "Annual Visitors", sub: "More than Disney World", narrative: "40 million people. Every year." },
  { value: 125, suffix: " min", label: "Avg Dwell Time", sub: "Industry avg is 68 min", narrative: "They stay. For 2+ hours." },
  { value: 55, suffix: "%", label: "Entertainment Space", sub: "Unmatched in North America", narrative: "More entertainment than retail." },
  { value: 8, suffix: " miles", label: "From Midtown Manhattan", sub: "20M+ metro catchment area", narrative: "8 miles from Manhattan." },
];

const demographics = [
  { label: "Ages 25-44", pct: 68, narrative: "Young. Affluent. Intentional." },
  { label: "HHI $100K+", pct: 54, narrative: "Disposable income. Discretionary spend." },
  { label: "Return Visitors", pct: 71, narrative: "They come back. Again and again." },
  { label: "College Educated", pct: 63, narrative: "Educated. Discerning. High-expectation." },
];

// Add this to globals.css for the narrative fade-in
// .narrative-text {
//   opacity: 0;
//   transform: translateY(10px);
//   transition: opacity 0.6s ease, transform 0.6s ease;
// }
// 
// .narrative-text.revealed {
//   opacity: 1;
//   transform: translateY(0);
// }

export default function Property() {
  const [activeNarrative, setActiveNarrative] = useState<string | null>(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="property" className="min-h-screen flex items-center bg-black text-white px-6 py-20 md:px-20 md:py-24">
      <div className="w-full max-w-[1700px] mx-auto">
        {/* Chapter Marker */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="text-[#C5A059]/60 text-[10px] tracking-[0.3em] uppercase mb-2">Chapter 02</p>
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
            className="h-px bg-[#C5A059] mx-auto mt-4"
          />
        </motion.div>

        {/* The Narrative — Scroll-triggered story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: The Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
                Scale, entertainment, and proximity combine with a loyal audience built for
                <span className="text-[#C5A059]"> high-intent retail, dining, and brand experiences.</span>
              </p>

              <div className="space-y-2 pt-4">
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
          </div>

          {/* Right: Visitor Profile — "These are your customers" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-white/10 p-6 md:p-8 bg-white/5"
          >
            <div className="text-center mb-6">
              <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase mb-2">Chapter 03</p>
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

        {/* Stats Grid — Each reveals with its own narrative */}
        <div className="relative">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <p className="text-white/40 text-xs tracking-widest uppercase">The Numbers That Matter</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-px bg-white/10 border border-white/10">
            {stats.map((stat, i) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
              return (
                <motion.div
                  key={stat.label}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-black p-5 md:p-6 text-center group hover:bg-white/5 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setActiveNarrative(stat.narrative)}
                  onMouseLeave={() => setActiveNarrative(null)}
                >
                  <p className="text-3xl md:text-4xl font-light text-[#C5A059] mb-3 whitespace-nowrap drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]">
                    <Counter target={stat.value} suffix={stat.suffix} delay={i * 200} />
                  </p>
                  <p className="text-white/80 text-sm tracking-wide mb-2">{stat.label}</p>
                  <p className="text-white/30 text-xs leading-relaxed">{stat.sub}</p>

                  {/* Floating narrative tooltip */}
                  {activeNarrative === stat.narrative && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-1/2 -translate-x-1/2 -top-12 bg-[#C5A059]/10 backdrop-blur-md border border-[#C5A059]/30 rounded-full px-4 py-1.5 whitespace-nowrap"
                    >
                      <span className="text-[#C5A059] text-xs font-light">{stat.narrative}</span>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* New York Catchment Map Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase mb-2">Proximity</p>
              <h4 className="text-2xl md:text-3xl font-light mb-3">
                8 miles from <span className="gold-text">Midtown Manhattan.</span>
              </h4>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                20M+ people in the metro catchment area. Accessible via Lincoln Tunnel, George Washington Bridge, and NJ Transit.
              </p>
              <div className="flex gap-4">
                <div>
                  <p className="text-2xl text-[#C5A059] font-light">8 min</p>
                  <p className="text-white/40 text-[10px]">from Manhattan</p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="text-2xl text-[#C5A059] font-light">20M+</p>
                  <p className="text-white/40 text-[10px]">metro catchment</p>
                </div>
              </div>
            </div>

            {/* Animated Map Visualization */}
            {/* <div className="relative h-[200px] bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F] rounded-xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 rounded-full bg-[#C5A059]/20 border border-[#C5A059] mx-auto mb-3"
                  />
                  <p className="text-[#C5A059] text-xs font-mono">Manhattan</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-px bg-gradient-to-r from-[#C5A059] to-transparent mx-auto mt-2"
                  />
                  <p className="text-white/40 text-[10px] mt-2">→ 8 miles → American Dream</p>
                </div>
              </div>
            </div> */}

{/* Animated Map Visualization - NYC to American Dream */}
<div className="relative h-[280px] md:h-[300px] bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-xl overflow-hidden border border-white/10">
  
  {/* Clean SVG Map */}
  <svg viewBox="0 0 500 280" className="w-full h-full" style={{ background: "transparent" }}>
    
    {/* Subtle grid */}
    <g opacity="0.04">
      <line x1="0" y1="70" x2="500" y2="70" stroke="white" strokeWidth="0.5" />
      <line x1="0" y1="140" x2="500" y2="140" stroke="white" strokeWidth="0.5" />
      <line x1="0" y1="210" x2="500" y2="210" stroke="white" strokeWidth="0.5" />
      <line x1="125" y1="0" x2="125" y2="280" stroke="white" strokeWidth="0.5" />
      <line x1="250" y1="0" x2="250" y2="280" stroke="white" strokeWidth="0.5" />
      <line x1="375" y1="0" x2="375" y2="280" stroke="white" strokeWidth="0.5" />
    </g>

    {/* Hudson River - subtle */}
    <path 
      d="M 270,10 Q 282,140 275,270" 
      fill="none" 
      stroke="#3B82F6" 
      strokeWidth="4" 
      strokeOpacity="0.2" 
      strokeLinecap="round"
    />

    {/* Connection Line */}
    <motion.line
      x1="245"
      y1="150"
      x2="305"
      y2="150"
      stroke="#C5A059"
      strokeWidth="1"
      strokeDasharray="6,4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.5 }}
      transition={{ duration: 1, delay: 0.5 }}
    />

    {/* Traveling Dot */}
    <circle cx="245" cy="150" r="3" fill="#C5A059">
      <animate 
        attributeName="cx" 
        values="245;305;245" 
        dur="3s" 
        repeatCount="indefinite" 
      />
      <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* 8 MILES Badge - Center */}
    <g transform="translate(275, 135)">
      <rect x="-22" y="-9" width="44" height="14" rx="7" fill="#C5A059" opacity="0.12" />
      <text x="0" y="1" textAnchor="middle" fill="#C5A059" fontSize="9" fontWeight="bold" letterSpacing="2">
        8 MILES
      </text>
    </g>

    {/* American Dream Marker (Left) */}
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", delay: 0.2, stiffness: 300 }}
    >
      {/* Pulse ring */}
      <circle cx="220" cy="150" r="14" fill="none" stroke="#C5A059" strokeWidth="0.8" opacity="0.3">
        <animate attributeName="r" values="14;24;14" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Marker */}
      <circle cx="220" cy="150" r="10" fill="#C5A059" stroke="#0A0A0F" strokeWidth="2" />
      <text x="220" y="153" textAnchor="middle" fill="#0A0A0F" fontSize="7" fontWeight="bold">AD</text>
      
      {/* Label */}
      <text x="220" y="175" textAnchor="middle" fill="#C5A059" fontSize="8" fontWeight="bold" letterSpacing="1.5">
        AMERICAN DREAM
      </text>
    </motion.g>

    {/* Manhattan Marker (Right) */}
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", delay: 0.4, stiffness: 300 }}
    >
      {/* Pulse ring */}
      <circle cx="320" cy="150" r="14" fill="none" stroke="#EF4444" strokeWidth="0.8" opacity="0.3">
        <animate attributeName="r" values="14;24;14" dur="2s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      
      {/* Marker */}
      <circle cx="320" cy="150" r="9" fill="#EF4444" stroke="#0A0A0F" strokeWidth="2" />
      <text x="320" y="153" textAnchor="middle" fill="#0A0A0F" fontSize="6" fontWeight="bold">NYC</text>
      
      {/* Label */}
      <text x="320" y="175" textAnchor="middle" fill="#EF4444" fontSize="8" fontWeight="bold" letterSpacing="1.5">
        MANHATTAN
      </text>
    </motion.g>

    {/* Route indicators - Subtle dots */}
    <circle cx="248" cy="150" r="1" fill="#C5A059" opacity="0.3" />
    <circle cx="255" cy="150" r="1" fill="#C5A059" opacity="0.3" />
    <circle cx="262" cy="150" r="1" fill="#C5A059" opacity="0.3" />
    <circle cx="269" cy="150" r="1" fill="#C5A059" opacity="0.3" />
    <circle cx="283" cy="150" r="1" fill="#C5A059" opacity="0.3" />
    <circle cx="290" cy="150" r="1" fill="#C5A059" opacity="0.3" />
    <circle cx="297" cy="150" r="1" fill="#C5A059" opacity="0.3" />
  </svg>

  {/* Bottom Legend - Minimal */}
  <div className="absolute bottom-3 right-3 z-10 flex gap-3">
    <div className="flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
      <span className="text-white/20 text-[6px] tracking-wider">AD</span>
    </div>
    <div className="flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
      <span className="text-white/20 text-[6px] tracking-wider">NYC</span>
    </div>
  </div>

  {/* Transportation - Bottom Left */}
  <div className="absolute bottom-3 left-3 z-10 flex gap-3">
    <span className="text-white/12 text-[7px] tracking-wider">🚗 Lincoln Tunnel</span>
    <span className="text-white/12 text-[7px] tracking-wider">🌉 GW Bridge</span>
    <span className="text-white/12 text-[7px] tracking-wider">🚆 NJ Transit</span>
  </div>

  {/* Subtle scanning effect */}
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: "100%" }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    className="absolute inset-x-0 top-0 h-20 pointer-events-none bg-gradient-to-b from-transparent via-[#C5A059]/3 to-transparent"
  />
</div>
 
          </div>
        </motion.div>
      </div>
    </section>
  );
}