"use client";
import { motion } from "framer-motion";

export default function Retail() {
  const brands = [
    "ZARA",
    "UNIQLO",
    "LEGO",
    "NIKE",
    "ADIDAS",
    "APPLE",
    "H&M",
    "SEPHORA",
  ];

  return (
    <motion.section
      id="retail"
      className="min-h-screen bg-white text-black flex flex-col justify-center px-6 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-center">
        Retail Experience
      </h2>

      {/* Horizontal Scroll */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-10 px-4">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="min-w-[150px] h-[100px] bg-gray-100 flex items-center justify-center rounded-xl text-lg font-medium hover:scale-105 transition"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto text-center">
        
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Flagship Stores</h3>
          <p className="text-gray-500 mt-2">
            Premium brand presence in high-traffic zones.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Mid-Tier Retail</h3>
          <p className="text-gray-500 mt-2">
            Consistent footfall and strong conversion rates.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Pop-Up Spaces</h3>
          <p className="text-gray-500 mt-2">
            Flexible retail for emerging and seasonal brands.
          </p>
        </div>

      </div>
    </motion.section>
  );
}