"use client";

import { motion } from "framer-motion";

export default function Entertainment() {
  const attractions = [
    {
      title: "Nickelodeon Universe",
      desc: "Western Hemisphere’s largest indoor theme park 🎢",
    },
    {
      title: "Big Snow",
      desc: "North America’s only indoor ski slope ⛷️",
    },
    {
      title: "DreamWorks Water Park",
      desc: "Largest indoor water park in the U.S. 🌊",
    },
    {
      title: "Ice Rink",
      desc: "NHL-size rink for events & skating 🏒",
    },
  ];

  return (
    <motion.section
      id="entertainment"
      className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-center">
        Entertainment Destination
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">

        {attractions.map((item, i) => (
          <div
            key={i}
            className="p-8 border border-gray-700 rounded-xl hover:bg-white hover:text-black transition"
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </motion.section>
  );
}