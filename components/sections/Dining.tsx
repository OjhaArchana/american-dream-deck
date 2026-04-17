"use client";
import { motion } from "framer-motion";

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
            <div className="aspect-[4/3] relative overflow-hidden">
                <img
                 src={cat.image}
                 alt={cat.name}
                 loading="lazy"
                 decoding="async"
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



// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
 
// const categories = [
//   {
//     name:  "Fine Dining",
//     desc:  "White-tablecloth experiences from acclaimed chefs.",
//     count: "8 restaurants",
//     image: "/images/fine-dine.jpg",
//   },
//   {
//     name:  "Fast Casual",
//     desc:  "Premium quick-service for high-velocity footfall zones.",
//     count: "40+ concepts",
//     image: "/images/casual-dining.jpg",
//   },
//   {
//     name:  "Desserts & Cafés",
//     desc:  "Artisan coffee, patisseries, and destination dessert brands.",
//     count: "15 concepts",
//     image: "/images/cafes-restuarants.jpg",
//   },
//   {
//     name:  "International Cuisine",
//     desc:  "Global flavors curated for a diverse, sophisticated audience.",
//     count: "20+ cuisines",
//     image: "/images/international-cuisine.jpg",
//   },
// ];
 
// // ── Smooth-loading image card ────────────────────────────────────────────────
// // Tracks per-image loaded state internally so each card fades in
// // independently — no layout shift, no flash of missing image.
// function DiningCard({
//   cat,
//   index,
// }: {
//   cat: (typeof categories)[0];
//   index: number;
// }) {
//   const [imgLoaded, setImgLoaded] = useState(false);
 
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.7 }}
//       className="bg-zinc-950 group hover:bg-white/5 transition-colors duration-300 cursor-default"
//     >
//       {/* ── Image container — fixed aspect ratio prevents layout shift ── */}
//       <div className="aspect-[4/3] relative overflow-hidden bg-zinc-900">
 
//         {/* Skeleton shimmer — visible until image loads */}
//         <div
//           className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 transition-opacity duration-700"
//           style={{ opacity: imgLoaded ? 0 : 1 }}
//         />
 
//         {/* Actual image — fades in once loaded */}
//         <img
//           src={cat.image}
//           alt={cat.name}
//           loading="lazy"
//           decoding="async"
//           onLoad={() => setImgLoaded(true)}
//           className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
//           style={{
//             opacity:    imgLoaded ? 1 : 0,
//             // Slight blur-up effect: blurry → sharp as it loads
//             filter:     imgLoaded ? "blur(0px)" : "blur(8px)",
//             transition: "opacity 700ms ease, filter 700ms ease, transform 700ms ease",
//             willChange: "transform, opacity",
//             // GPU layer to prevent paint cost on scale hover
//             transform:  "translateZ(0)",
//           }}
//         />
 
//         {/* Dark overlay — lightens on hover */}
//         <div
//           className="absolute inset-0 pointer-events-none transition-opacity duration-500"
//           style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
//         />
//       </div>
 
//       {/* ── Text ─────────────────────────────────────────────────────────── */}
//       <div className="p-8">
//         <p className="text-white/30 text-xs tracking-widest uppercase mb-3">
//           {cat.count}
//         </p>
//         <h3 className="text-white font-light text-xl mb-3">{cat.name}</h3>
//         <p className="text-white/40 text-sm leading-relaxed">{cat.desc}</p>
//       </div>
//     </motion.div>
//   );
// }
 
// // ── Section ──────────────────────────────────────────────────────────────────
// export default function Dining() {
//   return (
//     <section id="dining" className="bg-zinc-950 text-white py-32 px-6 md:px-20">
 
//       {/* Header */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6"
//       >
//         Dining & Lifestyle
//       </motion.p>
 
//       <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-light max-w-lg leading-tight"
//         >
//           Food as a
//           <br />
//           <span className="italic">Destination</span>
//         </motion.h2>
 
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-right"
//         >
//           <p className="text-5xl font-light text-white">100+</p>
//           <p className="text-white/40 text-sm tracking-wide mt-1">Dining Options</p>
//         </motion.div>
//       </div>
 
//       {/* Category grid */}
//       <div className="grid md:grid-cols-4 gap-px bg-white/10">
//         {categories.map((cat, i) => (
//           <DiningCard key={cat.name} cat={cat} index={i} />
//         ))}
//       </div>
 
//       {/* Pull quote */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.4, duration: 1 }}
//         className="mt-24 border-t border-white/10 pt-16 text-center"
//       >
//         <p className="text-2xl md:text-4xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed">
//           "Dining guests spend{" "}
//           <span className="text-white">47% more time on-property</span> and are
//           3× more likely to make an unplanned retail purchase."
//         </p>
//         <p className="text-white/20 text-xs tracking-widest uppercase mt-6">
//           American Dream Internal Analytics, 2024
//         </p>
//       </motion.div>
//     </section>
//   );
// }