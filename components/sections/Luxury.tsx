"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "Hermès", note: "Leather Goods & Accessories" },
  { name: "Tiffany & Co.", note: "Fine Jewelry" },
  { name: "Dolce & Gabbana", note: "Luxury Fashion" },
  { name: "Moncler", note: "Luxury Outerwear" },
];

export default function Luxury() {
  return (
    <section id="luxury" className="bg-black text-white min-h-screen flex flex-col md:flex-row">

      {/* Left: Image panel */}
      {/* 
        REPLACE the bg-zinc-900 div below with an actual image:
        <div className="md:w-1/2 relative overflow-hidden">
          <img src="/images/luxury-hero.jpg" className="w-full h-full object-cover" alt="Luxury wing" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        Generate this image with Midjourney:
        "Hermès storefront inside luxury shopping mall, warm amber lighting, 
         marble floors, editorial fashion photography, cinematic, 16:9"
      */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:w-1/2 relative overflow-hidden min-h-[50vh] md:min-h-screen bg-zinc-900"
        style={{
          backgroundImage: "url('/images/luxury.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Fallback gradient when no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-60" />

        {/* Floating label */}
        <div className="absolute bottom-10 left-10">
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-2">
            The Luxury Wing
          </p>
          <p className="text-white text-sm tracking-wide">
            American Dream, East Rutherford, NJ
          </p>
        </div>
      </motion.div>

      {/* Right: Text panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:w-1/2 flex flex-col justify-center px-10 md:px-20 py-24"
      >
        <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-8">
          Luxury
        </p>

        <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
          Luxury
          <br />
          <span className="italic">Redefined</span>
        </h2>

        <p className="text-white/50 text-base leading-relaxed mb-16 max-w-sm">
          Where Manhattan's most discerning shoppers come when they leave
          Manhattan. The only luxury retail environment in the metro area
          combining flagship presence with world-class entertainment.
        </p>

        {/* Brand list with dividers */}
        <div className="space-y-0">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="flex items-center justify-between border-t border-white/10 py-5 group hover:border-white/30 transition-colors duration-300"
            >
              <span className="text-white font-light tracking-wide">{brand.name}</span>
              <span className="text-white/30 text-xs">{brand.note}</span>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 self-start border border-white/30 text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
        >
          Inquire About Luxury Space
        </motion.button>
      </motion.div>
    </section>
  );
}