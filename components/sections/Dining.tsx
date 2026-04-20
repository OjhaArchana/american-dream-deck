"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    name: "Fine Dining",
    desc: "White-tablecloth experiences from acclaimed chefs.",
    count: "8 restaurants",
    image: "/images/fine-dine.jpg",
  },
  {
    name: "Fast Casual",
    desc: "Premium quick-service for high-velocity footfall zones.",
    count: "40+ concepts",
    image: "/images/casual-dining.jpg",
  },
  {
    name: "Desserts & Cafes",
    desc: "Artisan coffee, patisseries, and destination dessert brands.",
    count: "15 concepts",
    image: "/images/cafes-restuarants.jpg",
  },
  {
    name: "International Cuisine",
    desc: "Global flavors curated for a diverse, sophisticated audience.",
    count: "20+ cuisines",
    image: "/images/international-cuisine.jpg",
  },
];

function DiningCard({
  cat,
  index,
}: {
  cat: (typeof categories)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="bg-zinc-950 group hover:bg-white/5 transition-colors duration-300 cursor-default"
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-zinc-900">
        <img
          src={cat.image}
          alt={cat.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
      </div>

      <div className="p-5 md:p-6">
        <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
          {cat.count}
        </p>
        <h3 className="text-white font-light text-lg md:text-xl mb-2">{cat.name}</h3>
        <p className="text-white/40 text-sm leading-relaxed">{cat.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Dining() {
  const [showInsight, setShowInsight] = useState(false);

  return (
    <section id="dining" className="min-h-screen flex items-center bg-zinc-950 text-white px-6 py-20 md:px-20 md:py-24">
      <div className="w-full max-w-[1700px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-xs tracking-[0.4em] uppercase mb-5"
        >
          Dining & Lifestyle
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light max-w-lg leading-tight"
          >
            Food as a
            <br />
            <span className="italic">Destination</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <div className="text-left md:text-right">
              <p className="text-5xl font-light text-white">100+</p>
              <p className="text-white/40 text-sm tracking-wide mt-1">Dining Options</p>
            </div>

            <button
              type="button"
              onClick={() => setShowInsight(true)}
              className="border border-white/30 text-white text-xs tracking-widest uppercase px-5 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              View Dining Insight
            </button>
          </motion.div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-4 gap-px bg-white/10">
            {categories.map((cat, i) => (
              <DiningCard key={cat.name} cat={cat} index={i} />
            ))}
          </div>

          {showInsight && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-20 flex items-center justify-center bg-black/55 p-6 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full max-w-3xl border border-white/15 bg-black/80 px-8 py-9 shadow-2xl backdrop-blur-md md:px-12 md:py-11"
              >
                <button
                  type="button"
                  onClick={() => setShowInsight(false)}
                  className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center border border-white/20 text-xl leading-none text-white/50 transition-colors hover:border-white/50 hover:text-white"
                  aria-label="Close dining insight"
                >
                  x
                </button>

                <p className="mb-6 text-white/35 text-xs tracking-[0.3em] uppercase">
                  Internal Analytics, 2024
                </p>

                <p className="max-w-2xl text-2xl font-light leading-snug text-white/70 md:text-4xl">
                  Dining guests spend{" "}
                  <span className="text-white">47% more time on-property</span> and are{" "}
                  <span className="text-white">3x more likely</span> to make an unplanned retail purchase.
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
