"use client";
import { motion, AnimatePresence } from "framer-motion";
// import { image } from "framer-motion/client";
import { useEffect, useState } from "react";

const brands = [
  {
    name: "Hermès",
    note: "Leather Goods & Accessories",
    image: "/images/hermes.jpg",
    images: "/images/hermes1.jpg",
  },
  {
    name: "Tiffany & Co.",
    note: "Fine Jewelry",
    image: "/images/tiffany.jpg",
    images: "/images/tiffany1.jpg",
  },
  {
    name: "Dolce & Gabbana",
    note: "Luxury Fashion",
    image: "/images/dolcegabbana.jpg",
  },
  {
    name: "Moncler",
    note: "Luxury Outerwear",
    image: "/images/moncler.jpg",
    images: "/images/luxury.jpg",
  },
];

export default function Luxury() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 3000); // 3 sec per brand

    return () => clearInterval(interval);
  }, []);

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
      <AnimatePresence mode="wait">
        <motion.div className="md:w-1/2 relative overflow-hidden min-h-[50vh] md:min-h-screen">
          {brands.map(
            (brand, i) =>
              i === activeIndex && (
                <motion.div
                  key={i}
                  initial={{ x: "100%", opacity: 0.9 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-20%", opacity: 0.8 }}
                  transition={{
                    duration: 1.6,
                    ease: [0.22, 1, 0.36, 1], // smooth luxury easing
                  }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${brand.images || brand.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ),
          )}

          {/* soft overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* label */}
          <div className="absolute bottom-10 left-10">
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-2">The Luxury Wing</p>
            <p className="text-white text-sm tracking-wide">American Dream, East Rutherford, NJ</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Right: Text panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:w-1/2 flex flex-col justify-center px-10 md:px-20 py-24"
      >
        <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-8">Luxury</p>

        <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
          Luxury
          <br />
          <span className="italic">Redefined</span>
        </h2>

        <p className="text-white/50 text-base leading-relaxed mb-16 max-w-sm">
          Where Manhattan's most discerning shoppers come when they leave Manhattan. The only luxury retail environment in the metro area combining flagship presence with
          world-class entertainment.
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

// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const brands = [
//   {
//     name: "Hermès",
//     note: "Leather Goods & Accessories",
//     image: "/images/hermes.jpg",
//   },
//   {
//     name: "Tiffany & Co.",
//     note: "Fine Jewelry",
//     image: "/images/tiffany.jpg",
//   },
//   {
//     name: "Dolce & Gabbana",
//     note: "Luxury Fashion",
//     image: "/images/dolcegabbana.jpg",
//   },
//   {
//     name: "Moncler",
//     note: "Luxury Outerwear",
//     image: "/images/moncler.jpg",
//   },
// ];

// export default function Luxury() {
//   // ✅ Hooks MUST be inside component
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % brands.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-black text-white min-h-screen flex flex-col md:flex-row">

//       {/* LEFT IMAGE PANEL */}
//       <motion.div className="md:w-1/2 relative overflow-hidden min-h-[50vh] md:min-h-screen">
//         {brands.map((brand, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: i === activeIndex ? 1 : 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url(${brand.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//         ))}

//         <div className="absolute inset-0 bg-black/30" />
//       </motion.div>

//       {/* RIGHT PANEL */}
//       <div className="md:w-1/2 flex flex-col justify-center px-10 md:px-20 py-24">
//         {brands.map((brand, i) => (
//           <div
//             key={i}
//             onMouseEnter={() => setActiveIndex(i)} // 🔥 nice UX
//             className={`flex justify-between border-t py-5 transition-all
//               ${i === activeIndex ? "text-white border-white" : "text-white/50 border-white/10"}
//             `}
//           >
//             <span>{brand.name}</span>
//             <span className="text-xs">{brand.note}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
