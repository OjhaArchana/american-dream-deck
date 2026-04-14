"use client";

import { motion } from "framer-motion";

export default function Luxury() {
  return (
    <motion.section
      id="luxury"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl text-center">

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Luxury Redefined
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-400">
          Where Manhattan's most discerning shoppers come when they leave Manhattan.
        </p>

        {/* Brand Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-300">
          <span>Hermès</span>
          <span>Tiffany & Co.</span>
          <span>Dolce & Gabbana</span>
          <span>Moncler</span>
        </div>

        {/* CTA */}
        <button className="mt-10 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Inquire About Luxury Space
        </button>

      </div>
    </motion.section>
  );
}