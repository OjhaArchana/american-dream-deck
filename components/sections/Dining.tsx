"use client";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Fine Dining",
    desc: "White-tablecloth experiences from acclaimed chefs.",
    count: "8 restaurants",
    image: "/images/fine-dining.jpg",
  },
  {
    name: "Fast Casual",
    desc: "Premium quick-service for high-velocity footfall zones.",
    count: "40+ concepts",
    image: "/images/casual-dining.jpg",
  },
  {
    name: "Desserts & Cafés",
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

export default function Dining() {
  return (
    <section id="dining" className="bg-zinc-950 text-white py-32 px-6 md:px-20">

      {/* Header */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6"
      >
        Dining & Lifestyle
      </motion.p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
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
          className="text-right"
        >
          <p className="text-5xl font-light text-white">100+</p>
          <p className="text-white/40 text-sm tracking-wide mt-1">
            Dining Options
          </p>
        </motion.div>
      </div>

      {/* Category grid */}
      <div className="grid md:grid-cols-4 gap-px bg-white/10">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="bg-zinc-950 group hover:bg-white/5 transition-colors duration-300 cursor-default"
          >
            {/* Image placeholder — replace with real/AI image */}
            {/*
              To add imagery:
              <div className="aspect-[4/3] overflow-hidden">
                <img src={cat.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              Midjourney prompt for each:
              Fine Dining: "upscale restaurant interior, ambient candlelight, white tablecloths, editorial food photography"
              Fast Casual: "modern food court, luxury shopping mall interior, natural light, architectural photography"
            */}
            {/* <div className="aspect-[4/3] bg-zinc-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/10 text-4xl font-light">{i + 1}</p>
              </div>
            </div> */}
            <div className="aspect-[4/3] relative overflow-hidden">
                <img
                 src={cat.image}
                 alt={cat.name}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

               {/* Dark overlay for premium look */}
               <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500" />
               </div>

            <div className="p-8">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-3">
                {cat.count}
              </p>
              <h3 className="text-white font-light text-xl mb-3">{cat.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pull quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-24 border-t border-white/10 pt-16 text-center"
      >
        <p className="text-2xl md:text-4xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed">
          "Dining guests spend{" "}
          <span className="text-white">47% more time on-property</span> and
          are 3× more likely to make an unplanned retail purchase."
        </p>
        <p className="text-white/20 text-xs tracking-widest uppercase mt-6">
          American Dream Internal Analytics, 2024
        </p>
      </motion.div>
    </section>
  );
}