"use client";
import { motion } from "framer-motion";

const attractions = [
  {
    title: "Nickelodeon Universe",
    stat: "35 rides & attractions",
    desc: "Western Hemisphere's largest indoor theme park. 8 acres. Year-round programming for families and brand activations.",
    tag: "Theme Park",
    image: "/images/nick-universe.jpg",
  },
  {
    title: "Big SNOW",
    stat: "180,000 sq ft",
    desc: "North America's only indoor real-snow ski slope. Open 365 days a year, regardless of weather.",
    tag: "Indoor Ski",
    image: "/images/big-snow.jpg",
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
  return (
    <section id="entertainment" className="bg-black text-white py-32 px-6 md:px-20">

      {/* Header */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6"
      >
        Entertainment
      </motion.p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light max-w-xl leading-tight"
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
          className="text-white/40 text-sm max-w-xs leading-relaxed"
        >
          55% of American Dream is dedicated to entertainment — the highest
          ratio of any retail property in North America.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-px bg-white/10">
        {attractions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="bg-black group cursor-default"
          >
            {/* Image area */}
            {/*
              Replace the placeholder below with:
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              Midjourney prompts:
              Nickelodeon: "indoor theme park roller coaster, colorful neon lights, cinematic photography, wide angle"
              Big Snow: "indoor ski slope artificial snow, skiers, dramatic overhead lighting, architecture photography"
              Water Park: "indoor water park slides, tropical lighting, wide establishing shot, editorial"
              Ice Rink: "NHL ice rink inside luxury mall, overhead lighting, figure skating, architectural photography"
            */}
            <div className="aspect-video bg-zinc-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-950 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute top-6 left-6">
                <span className="text-white/40 text-xs tracking-widest uppercase border border-white/20 px-3 py-1">
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 border-t border-white/10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-light text-white">
                  {item.title}
                </h3>
                <span className="text-white/30 text-sm">{item.stat}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}