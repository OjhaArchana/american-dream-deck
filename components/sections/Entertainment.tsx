"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import AnimatedStats from "@/components/ui/AnimatedStats";

const attractions = [
  {
    title: "Nickelodeon Universe",
    stat: 35,
    statSuffix: " rides & attractions",
    desc: "Western Hemisphere's largest indoor theme park. 8 acres. Year-round programming for families and brand activations.",
    tag: "Theme Park",
    image: "/images/ai-generated/theme-park-ai.png",
    videoPoster: "/images/ai-generated/theme-park-ai.png",
    videoUrl: "/videos/theme-park-loop.mp4",
  },
  {
    title: "Big SNOW",
    stat: 180000,
    statSuffix: " sq ft",
    desc: "North America's only indoor real-snow ski slope. Open 365 days a year, regardless of weather.",
    tag: "Indoor Ski",
    image: "/images/ai-generated/bigsnow-ai.png",
    videoPoster: "/images/ai-generated/bigsnow-ai.png",
   videoUrl: "/videos/bigsnow-loop.mp4",
  },
  {
    title: "DreamWorks Water Park",
    stat: 1,
    statPrefix: "1M+ ",
    statSuffix: "gallons",
    desc: "The largest indoor water park in the United States. 40 water attractions across 8 acres of climate-controlled space.",
    tag: "Water Park",
    image: "/images/ai-generated/waterpark-poster.png",
    videoPoster: "/images/ai-generated/waterpark-poster.png",
    videoUrl: "/videos/waterpark-ai.mp4",
  },
  {
    title: "NHL Ice Rink",
    stat: "Olympic",
    statSuffix: " size",
    desc: "Regulation NHL-size ice rink available for public skating, private events, corporate activations, and professional tournaments.",
    tag: "Ice Rink",
    image: "/images/ai-generated/icerink-poster.png",
    videoPoster: "/images/ai-generated/icerink-poster.png",
    videoUrl: "/videos/icerink-ai.mp4",
  },
];

export default function Entertainment() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="entertainment" className="h-full bg-black text-white flex flex-col justify-center overflow-hidden">
      <div className="px-6 md:px-20 py-12">
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C5A059]/60 text-[10px] tracking-[0.3em] uppercase mb-2"
        >
          Entertainment
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light"
          >
            No Other Property
            <br />
            <span className="italic gold-text">Comes Close</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-right"
          >
            <AnimatedStats value={55} suffix="%" label="Entertainment Space" subLabel="Highest ratio in North America" glow />
          </motion.div>
        </div>

        {/* Horizontal Scroll Container - ONLY CHANGE HERE */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {attractions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group rounded-xl overflow-hidden border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 flex-shrink-0 w-[350px]"
            >
              {/* Video background on hover */}
              <div className="relative aspect-video overflow-hidden">
                {hoveredIndex === i && item.videoUrl ? ( 
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster={item.videoPoster}
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-white/80 text-[10px] tracking-widest uppercase border border-white/30 px-3 py-1 backdrop-blur-sm rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg md:text-xl font-light text-white">{item.title}</h3>
                  <span className="text-[#C5A059] text-sm whitespace-nowrap">
                    {item.statPrefix}
                    {typeof item.stat === "number" ? item.stat.toLocaleString() : item.stat}
                    {item.statSuffix}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-white/20 text-[8px] tracking-widest uppercase flex items-center justify-center gap-2">
            <span>←</span>
            <span>SCROLL TO EXPLORE</span>
            <span>→</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}