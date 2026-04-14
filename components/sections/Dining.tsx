"use client";

import { motion } from "framer-motion";

export default function Dining() {
  const categories = [
    { name: "Fine Dining", emoji: "🍷" },
    { name: "Fast Casual", emoji: "🍔" },
    { name: "Desserts", emoji: "🍰" },
    { name: "International", emoji: "🍜" },
  ];

  return (
    <motion.section
      id="dining"
      className="min-h-screen bg-white text-black px-6 py-16 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-center">
        Dining Experience
      </h2>

      {/* Highlight */}
      <p className="text-gray-500 text-center max-w-xl mb-10">
        A curated mix of global cuisines and premium dining spaces designed for every taste.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
        {categories.map((item, i) => (
          <div
            key={i}
            className="h-[150px] bg-gray-100 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition"
          >
            <div className="text-3xl">{item.emoji}</div>
            <p className="mt-2 font-medium">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Hero Stat */}
      <div className="mt-16 text-center">
        <p className="text-4xl md:text-6xl font-bold">20+</p>
        <p className="text-gray-500 mt-2">Restaurants & Dining Options</p>
      </div>
    </motion.section>
  );
}