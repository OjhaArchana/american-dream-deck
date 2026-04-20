"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const attractions = [
  {
    title: "Nickelodeon Universe",
    stat: "35 rides & attractions",
    desc: "Western Hemisphere's largest indoor theme park. 8 acres. Year-round programming for families and brand activations.",
    tag: "Theme Park",
    image: "/images/theme-park.jpg",
  },
  {
    title: "Big SNOW",
    stat: "180,000 sq ft",
    desc: "North America's only indoor real-snow ski slope. Open 365 days a year, regardless of weather.",
    tag: "Indoor Ski",
    image: "/images/indoor-ski.jpg",
  },
  {
    title: "DreamWorks Water Park",
    stat: "1M+ gallons",
    desc: "The largest indoor water park in the United States. 40 water attractions across 8 acres of climate-controlled space.",
    tag: "Water Park",
    image: "/images/water-park.jpg",
  },
  {
    title: "NHL Ice Rink",
    stat: "Full Olympic size",
    desc: "Regulation NHL-size ice rink available for public skating, private events, corporate activations, and professional tournaments.",
    tag: "Ice Rink",
    image: "/images/ice-rink.jpg",
  },
];

export default function Entertainment() {
  useEffect(() => {
    attractions.forEach((a) => {
      const img = new Image();
      img.src = a.image;
    });
  }, []);

  return (
    <section id="entertainment" className="h-full flex items-center bg-black text-white px-6 py-10 md:px-20 md:py-12">
      <div className="w-full max-w-[1700px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-xs tracking-[0.4em] uppercase mb-4"
        >
          Entertainment
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-5 gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light max-w-xl leading-tight"
          >
            No Other Property
            <br />
            <span className="italic">Comes Close</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm max-w-sm leading-relaxed"
          >
            55% of American Dream is dedicated to entertainment, the highest ratio of any retail property in North America.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {attractions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="grid h-auto bg-black group cursor-default md:h-[185px] md:grid-cols-[0.42fr_0.58fr]"
            >
              <div className="relative h-[150px] overflow-hidden bg-zinc-900 md:h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="text-white/70 text-[10px] tracking-widest uppercase border border-white/30 px-3 py-1 backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="flex min-h-0 flex-col justify-between border-t border-white/10 p-4 md:border-l md:border-t-0 md:p-5">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base md:text-lg font-light text-white">{item.title}</h3>
                    <span className="text-white/30 text-xs whitespace-nowrap">{item.stat}</span>
                  </div>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
