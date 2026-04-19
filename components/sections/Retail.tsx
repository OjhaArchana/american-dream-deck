// // "use client";
// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import { useState } from "react";

// // const brands = [
// //   { name: "APPLE", category: "Technology" },
// //   { name: "NIKE", category: "Sportswear" },
// //   { name: "ZARA", category: "Fast Fashion" },
// //   { name: "UNIQLO", category: "Lifestyle" },
// //   { name: "LEGO", category: "Experiential" },
// //   { name: "ADIDAS", category: "Sportswear" },
// //   { name: "H&M", category: "Fashion" },
// //   { name: "SEPHORA", category: "Beauty" },
// // ];

// // const leasingPaths = [
// //   {
// //     type: "Flagship Stores",
// //     sqft: "2,000 – 10,000 sq ft",
// //     desc: "Anchor positions in our highest-footfall corridors. Join Apple, Nike, and Zara in spaces designed for brand storytelling at scale.",
// //     stat: "180+ flagship locations",
// //     href: "/leasing/flagship",
// //   },
// //   {
// //     type: "Mid-Tier Retail",
// //     sqft: "500 – 3,000 sq ft",
// //     desc: "Strong conversion zones with consistent daily footfall. Ideal for established brands looking for regional presence.",
// //     stat: "200+ mid-tier tenants",
// //     href: "/leasing/midtier",
// //   },
// //   {
// //     type: "Pop-Up Spaces",
// //     sqft: "100 – 500 sq ft",
// //     desc: "Flexible short-term positions for launches, campaigns, and seasonal activations. Move fast, test new markets.",
// //     stat: "50+ pop-up positions available",
// //     href: "/leasing/popup",
// //   },
// // ];

// // export default function Retail() {
// //   const [isPaused, setIsPaused] = useState(false);

// //   return (
// //     <section id="retail" className="bg-zinc-950 text-white py-32 px-6 md:px-20">
// //       {/* Section header */}
// //       <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6">
// //         Retail
// //       </motion.p>

// //       <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
// //         <motion.h2
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-4xl md:text-6xl font-light max-w-xl leading-tight"
// //         >
// //           450+ Brands.
// //           <br />
// //           One Destination.
// //         </motion.h2>

// //         <motion.p
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2, duration: 0.8 }}
// //           className="text-white/40 text-sm max-w-sm leading-relaxed"
// //         >
// //           From global flagship stores to emerging brand pop-ups — American Dream offers the most diverse and high-performing retail environment in North America.
// //         </motion.p>
// //       </div>

// //       {/* Brand ticker */}
// //       <div className="relative overflow-hidden mb-20" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
// //         {/* Gradient fade edges */}
// //         <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
// //         <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

// //         {/* Moving reel */}
// //         <motion.div
// //           className="flex"
// //           animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
// //           transition={{
// //             duration: 40, // slower = more premium
// //             ease: "linear",
// //             repeat: Infinity,
// //           }}
// //         >
// //           {[...brands, ...brands].map((brand, i) => (
// //             <div key={i} className="flex-shrink-0 px-12 py-8 border-r border-white/10 group cursor-pointer flex flex-col items-center justify-center transition-all duration-500">
// //               {/* Logo (optional - uncomment when ready) */}
// //               {/*
// //         <div className="relative w-20 h-10 mb-3">
// //           <img
// //             src={brand.logo}
// //             className="absolute inset-0 w-full h-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500"
// //           />
// //           <img
// //             src={brand.logoColor}
// //             className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
// //           />
// //         </div>
// //         */}

// //               {/* Text */}
// //               <p className="text-white text-xs tracking-[0.3em] group-hover:text-white transition-colors duration-300">{brand.name}</p>
// //               <p className="text-white/30 text-[10px] mt-1 group-hover:text-white/60 transition-colors duration-300">{brand.category}</p>
// //             </div>
// //           ))}
// //         </motion.div>
// //       </div>

// //       {/* Leasing path cards */}
// //       <div className="grid md:grid-cols-3 gap-px bg-white/10">
// //         {leasingPaths.map((path, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: i * 0.15, duration: 0.7 }}
// //             className="bg-zinc-950 p-10 flex flex-col justify-between group hover:bg-white/5 transition-colors duration-300"
// //           >
// //             <div>
// //               <p className="text-white/40 text-xs tracking-widest uppercase mb-4">{path.sqft}</p>
// //               <h3 className="text-xl font-light text-white mb-4">{path.type}</h3>
// //               <p className="text-white/50 text-sm leading-relaxed">{path.desc}</p>
// //             </div>
// //             <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
// //               <span className="text-white/30 text-xs">{path.stat}</span>
// //               <Link href={path.href} className="text-white text-xs tracking-widest uppercase hover:underline underline-offset-4 transition">
// //                 Explore →
// //               </Link>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";

// // hasColor: true  → white by default, reveals color on hover
// // hasColor: false → white always, just brightens on hover
// const brands = [
//   { name: "APPLE",   category: "Technology",   logo: "/images/apple.png",   hasColor: false },
//   { name: "NIKE",    category: "Sportswear",   logo: "/images/nike.png",    hasColor: false },
//   { name: "ZARA",    category: "Fast Fashion", logo: "/images/zara.jpg",    hasColor: true },
//   { name: "UNIQLO",  category: "Lifestyle",    logo: "/images/uniqlo.png",  hasColor: true  },
//   { name: "LEGO",    category: "Experiential", logo: "/images/lego.png",    hasColor: true  },
//   { name: "ADIDAS",  category: "Sportswear",   logo: "/images/adidas.png",  hasColor: false },
//   { name: "H&M",     category: "Fashion",      logo: "/images/h&m.png",      hasColor: true  },
//   { name: "SEPHORA", category: "Beauty",       logo: "/images/sephora.png", hasColor: false },
// ];

// const leasingPaths = [
//   {
//     type: "Flagship Stores",
//     sqft: "2,000 – 10,000 sq ft",
//     desc: "Anchor positions in our highest-footfall corridors. Join Apple, Nike, and Zara in spaces designed for brand storytelling at scale.",
//     stat: "180+ flagship locations",
//     href: "/leasing/flagship",
//   },
//   {
//     type: "Mid-Tier Retail",
//     sqft: "500 – 3,000 sq ft",
//     desc: "Strong conversion zones with consistent daily footfall. Ideal for established brands looking for regional presence.",
//     stat: "200+ mid-tier tenants",
//     href: "/leasing/midtier",
//   },
//   {
//     type: "Pop-Up Spaces",
//     sqft: "100 – 500 sq ft",
//     desc: "Flexible short-term positions for launches, campaigns, and seasonal activations. Move fast, test new markets.",
//     stat: "50+ pop-up positions available",
//     href: "/leasing/popup",
//   },
// ];

// // ── Single brand tile ────────────────────────────────────────────────────────
// function BrandTile({ brand }: { brand: (typeof brands)[0] }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="flex-shrink-0 w-[160px] px-10 py-8 border-r border-white/10
//                  flex flex-col items-center justify-center gap-3 cursor-pointer"
//     >
//       <div className="relative w-[72px] h-[36px] flex items-center justify-center">

//         {brand.hasColor ? (
//           // ── COLOR LOGOS (LEGO, H&M, Uniqlo) ──────────────────────────────
//           // Two layers: color PNG underneath, white-filtered PNG on top.
//           // Hover fades out the white layer → color shows through.
//           <>
//             {/* Bottom: original color PNG */}
//             <img
//               src={brand.logo}
//               alt={brand.name}
//               draggable={false}
//               className="absolute inset-0 w-full h-full object-contain"
//               style={{
//                 opacity:    hovered ? 1 : 0,
//                 transition: "opacity 400ms ease",
//               }}
//             />
//             {/* Top: white version of same PNG */}
//             <img
//               src={brand.logo}
//               alt=""
//               aria-hidden="true"
//               draggable={false}
//               className="absolute inset-0 w-full h-full object-contain"
//               style={{
//                 opacity:    hovered ? 0 : 0.5,
//                 filter:     "brightness(0) invert(1)",
//                 transition: "opacity 400ms ease",
//               }}
//             />
//           </>
//         ) : (
//           // ── B&W LOGOS (Apple, Nike, Adidas, Zara, Sephora) ───────────────
//           // Single layer, always white. Just brightens slightly on hover.
//           // No color reveal — respects their monochrome identity.
//           <img
//             src={brand.logo}
//             alt={brand.name}
//             draggable={false}
//             className="absolute inset-0 w-full h-full object-contain"
//             style={{
//               filter:     "brightness(0) invert(1)",
//               opacity:    hovered ? 1 : 0.5,
//               transition: "opacity 400ms ease",
//             }}
//           />
//         )}
//       </div>

//       {/* Category label */}
//       <p
//         className="text-[10px] tracking-[0.25em] uppercase transition-colors duration-400"
//         style={{
//           color: hovered ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)",
//           transition: "color 400ms ease",
//         }}
//       >
//         {brand.category}
//       </p>
//     </div>
//   );
// }

// // ── Section ──────────────────────────────────────────────────────────────────
// export default function Retail() {
//   const [isPaused, setIsPaused] = useState(false);

//   return (
//     <section id="retail" className="bg-zinc-950 text-white py-32 px-6 md:px-20">

//       {/* Header */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6"
//       >
//         Retail
//       </motion.p>

//       <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-light max-w-xl leading-tight"
//         >
//           450+ Brands.
//           <br />
//           One Destination.
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="text-white/40 text-sm max-w-sm leading-relaxed"
//         >
//           From global flagship stores to emerging brand pop-ups — American Dream
//           offers the most diverse and high-performing retail environment in North America.
//         </motion.p>
//       </div>

//       {/* ── Brand ticker ──────────────────────────────────────────────────── */}
//       <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
//       <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="relative overflow-hidden mb-20 border-t border-b border-white/10"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         {/* Gradient fade edges */}
//         <div className="pointer-events-none absolute left-0 top-0 h-full w-28
//                         bg-gradient-to-r from-zinc-950 to-transparent z-10" />
//         <div className="pointer-events-none absolute right-0 top-0 h-full w-28
//                         bg-gradient-to-l from-zinc-950 to-transparent z-10" />

//         {/* Scrolling reel */}
//         <motion.div
//           className="flex"
//           animate={isPaused ? {} : { x: ["0%", "-50%"] }}
//           transition={{
//             duration: 35,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           {[...brands, ...brands].map((brand, i) => (
//             <BrandTile key={`${brand.name}-${i}`} brand={brand} />
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* ── Leasing path cards ────────────────────────────────────────────── */}
//       <div className="grid md:grid-cols-3 gap-px bg-white/10">
//         {leasingPaths.map((path, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.15, duration: 0.7 }}
//             className="bg-zinc-950 p-10 flex flex-col justify-between
//                        group hover:bg-white/5 transition-colors duration-300"
//           >
//             <div>
//               <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
//                 {path.sqft}
//               </p>
//               <h3 className="text-xl font-light text-white mb-4">{path.type}</h3>
//               <p className="text-white/50 text-sm leading-relaxed">{path.desc}</p>
//             </div>

//             <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
//               <span className="text-white/30 text-xs">{path.stat}</span>
//               <Link
//                 href={path.href}
//                 className="text-white text-xs tracking-widest uppercase
//                            hover:underline underline-offset-4 transition"
//               >
//                 Explore →
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const brands = [
  { name: "APPLE",  logo: "/images/apple.png",   hasColor: false },
  { name: "NIKE",   logo: "/images/nike.png",    hasColor: false },
  { name: "ZARA",   logo: "/images/zara.jpg",    hasColor: true },
  { name: "UNIQLO", logo: "/images/uniqlo.png",  hasColor: true  },
  { name: "LEGO",   logo: "/images/lego.png",    hasColor: true  },
  { name: "ADIDAS", logo: "/images/adidas.png",  hasColor: false },
  { name: "H&M",    logo: "/images/h&m.png",     hasColor: true  },
  { name: "SEPHORA",logo: "/images/sephora.png", hasColor: false },
];

const leasingPaths = [
  {
    type: "Flagship Stores",
    sqft: "2,000 – 10,000 sq ft",
    desc: "Anchor positions in our highest-footfall corridors. Join Apple, Nike, and Zara in spaces designed for brand storytelling at scale.",
    stat: "180+ flagship locations",
    href: "/leasing/flagship",
  },
  {
    type: "Mid-Tier Retail",
    sqft: "500 – 3,000 sq ft",
    desc: "Strong conversion zones with consistent daily footfall. Ideal for established brands looking for regional presence.",
    stat: "200+ mid-tier tenants",
    href: "/leasing/midtier",
  },
  {
    type: "Pop-Up Spaces",
    sqft: "100 – 500 sq ft",
    desc: "Flexible short-term positions for launches, campaigns, and seasonal activations. Move fast, test new markets.",
    stat: "50+ pop-up positions available",
    href: "/leasing/popup",
  },
];

// ── Brand tile: name by default → logo on hover ──────────────────────────────
function BrandTile({ brand }: { brand: (typeof brands)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-shrink-0 w-[160px] px-8 py-8 border-r border-white/10
                 flex flex-col items-center justify-center gap-3 cursor-pointer"
    >
      {/* Fixed-size container so layout never shifts on hover */}
      <div className="relative w-[80px] h-[38px] flex items-center justify-center">

        {/* ── Brand name (default, visible when not hovered) ── */}
        <span
          className="absolute inset-0 flex items-center justify-center
                     text-xs tracking-[0.25em] font-medium"
          style={{
            opacity:    hovered ? 0 : 1,
            color:      "rgba(255,255,255,0.55)",
            transition: "opacity 350ms ease",
            whiteSpace: "nowrap",
            fontSize:   brand.name.length > 6 ? "10px" : "12px",
          }}
        >
          {brand.name}
        </span>

        {/* ── Logo (revealed on hover) ── */}
        {brand.hasColor ? (
          // Color logo — shows in full color on hover
          <img
            src={brand.logo}
            alt={brand.name}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              opacity:    hovered ? 1 : 0,
              transition: "opacity 350ms ease",
            }}
          />
        ) : (
          // B&W logo — shows as bright white on hover
          <img
            src={brand.logo}
            alt={brand.name}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              filter:     "brightness(0) invert(1)",
              opacity:    hovered ? 1 : 0,
              transition: "opacity 350ms ease",
            }}
          />
        )}
      </div>

      {/* Category — dims when not hovered, brightens on hover */}
      {/* <p
        className="text-[10px] tracking-[0.25em] uppercase"
        style={{
          color:      hovered ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)",
          transition: "color 350ms ease",
          fontWeight: hovered ? 500 : 400,
        }}
      >
        {brand.category}
      </p> */}
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Retail() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="retail" className="bg-zinc-950 text-white py-32 px-6 md:px-20">

      {/* Header */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6"
      >
        Retail
      </motion.p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light max-w-xl leading-tight"
        >
          450+ Brands.
          <br />
          One Destination.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/40 text-sm max-w-sm leading-relaxed"
        >
          From global flagship stores to emerging brand pop-ups — American Dream
          offers the most diverse and high-performing retail environment in North America.
        </motion.p>
      </div>

      {/* ── Brand ticker ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden mb-20 border-t border-b border-white/10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-28
                        bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28
                        bg-gradient-to-l from-zinc-950 to-transparent z-10" />

        {/* Scrolling reel — doubled for seamless loop */}
        <motion.div
          className="flex"
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <BrandTile key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </motion.div>
      </motion.div>

      {/* ── Leasing path cards ────────────────────────────────────────────── */}
      <div className="grid md:grid-cols-3 gap-px bg-white/10">
        {leasingPaths.map((path, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="bg-zinc-950 p-10 flex flex-col justify-between
                       group hover:bg-white/5 transition-colors duration-300"
          >
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                {path.sqft}
              </p>
              <h3 className="text-xl font-light text-white mb-4">{path.type}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{path.desc}</p>
            </div>
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-white/30 text-xs">{path.stat}</span>
              <Link
                href={path.href}
                className="text-white text-xs tracking-widest uppercase
                           hover:underline underline-offset-4 transition"
              >
                Explore →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}