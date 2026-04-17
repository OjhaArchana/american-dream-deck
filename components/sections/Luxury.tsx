// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// // import { image } from "framer-motion/client";
// import { useEffect, useState } from "react";

// const brands = [
//   {
//     name: "Hermès",
//     note: "Leather Goods & Accessories",
//     image: "/images/hermes1.jpg",
//   },
//   {
//     name: "Tiffany & Co.",
//     note: "Fine Jewelry",
//     image: "/images/tiffany1.jpg",
//   },
//   {
//     name: "Dolce & Gabbana",
//     note: "Luxury Fashion",
//     image: "/images/dolce-gabbana.jpg",
//   },
//   {
//     name: "Moncler",
//     note: "Luxury Outerwear",
//     image: "/images/moncler.jpg",
//   },
// ];

// export default function Luxury() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   //  // ✅ PRELOAD IMAGES (IMPORTANT)
//   // useEffect(() => {
//   //   brands.forEach((b) => {
//   //     const img = new Image();
//   //     img.src = b.image;
//   //   });
//   // }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % brands.length);
//     }, 4000); // 3 sec per brand

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="luxury" className="bg-black text-white min-h-screen flex flex-col md:flex-row">
//       {/* Left: Image panel */}
//       <AnimatePresence mode="wait">
//         <motion.div className="md:w-1/2 relative overflow-hidden min-h-[50vh] md:min-h-screen">
//           {brands.map(
//             (brand, i) =>
//               i === activeIndex && (
//                 <motion.div
//                   key={i}
//                   initial={{ x: "100%", opacity: 0.9 }}
//                   animate={{ x: "0%", opacity: 1 }}
//                   exit={{ x: "-20%", opacity: 0.8 }}
//                   transition={{
//                     duration: 1.6,
//                     ease: [0.22, 1, 0.36, 1], // smooth luxury easing
//                   }}
//                   className="absolute inset-0"
//                   style={{
//                     backgroundImage: `url(${brand.image})`,
//                     //|| brand.images
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 />
//               ),
//           )}

//           {/* soft overlay */}
//           <div className="absolute inset-0 bg-black/25" />

//           {/* label */}
//           <div className="absolute bottom-10 left-10">
//             <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-2">The Luxury Wing</p>
//             <p className="text-white text-sm tracking-wide">American Dream, East Rutherford, NJ</p>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Right: Text panel */}
//       <motion.div
//         initial={{ opacity: 0, x: 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.2 }}
//         className="md:w-1/2 flex flex-col justify-center px-10 md:px-20 py-24"
//       >
//         <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-8">Luxury</p>

//         <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
//           Luxury
//           <br />
//           <span className="italic">Redefined</span>
//         </h2>

//         <p className="text-white/50 text-base leading-relaxed mb-16 max-w-sm">
//           Where Manhattan's most discerning shoppers come when they leave Manhattan. The only luxury retail environment in the metro area combining flagship presence with
//           world-class entertainment.
//         </p>

//         {/* Brand list with dividers */}
//         <div className="space-y-0">
//           {brands.map((brand, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
//               className="flex items-center justify-between border-t border-white/10 py-5 group hover:border-white/30 transition-colors duration-300"
//             >
//               <span className="text-white font-light tracking-wide">{brand.name}</span>
//               <span className="text-white/30 text-xs">{brand.note}</span>
//             </motion.div>
//           ))}
//           <div className="border-t border-white/10" />
//         </div>

//         {/* CTA */}
//         <motion.button
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.8 }}
//           className="mt-12 self-start border border-white/30 text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
//         >
//           Inquire About Luxury Space
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// }

"use client";
import { motion, AnimatePresence } from "framer-motion";
// import { image } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";

const brands = [
  {
    name: "Hermès",
    note: "Leather Goods & Accessories",
    image: "/images/hermes1.jpg",
  },
  {
    name: "Tiffany & Co.",
    note: "Fine Jewelry",
    image: "/images/tiffany1.jpg",
  },
  {
    name: "Dolce & Gabbana",
    note: "Luxury Fashion",
    image: "/images/dolce-gabbana.jpg",
  },
  {
    name: "Moncler",
    note: "Luxury Outerwear",
    image: "/images/moncler.jpg",
  },
];

const INTERVAL_MS = 4000;
 
export default function Luxury() {
  const [activeIndex, setActiveIndex]   = useState(0);
  const [imgsLoaded, setImgsLoaded]     = useState<boolean[]>(
    new Array(brands.length).fill(false)
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
 
  // ── 1. Preload every image before the slideshow starts ──────────────────
  useEffect(() => {
    const statuses = new Array(brands.length).fill(false);
 
    brands.forEach((brand, i) => {
      const img = new window.Image();
      img.onload  = () => { statuses[i] = true; setImgsLoaded([...statuses]); };
      img.onerror = () => { statuses[i] = true; setImgsLoaded([...statuses]); };
      img.src = brand.image;
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
 
  // ── 2. Start auto-rotation only after the first image is ready ──────────
  useEffect(() => {
    if (!imgsLoaded[0]) return;
    startInterval();
    return stopInterval;
  }, [imgsLoaded[0]]); // eslint-disable-line react-hooks/exhaustive-deps
 
  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, INTERVAL_MS);
  };
 
  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
 
  // ── 3. Click a brand row → jump to that image, reset timer ──────────────
  const handleBrandClick = (i: number) => {
    setActiveIndex(i);
    startInterval();          // reset the 4-second clock
  };
 
  return (
    <section id="luxury" className="bg-black text-white min-h-screen flex flex-col md:flex-row">
 
      {/* ── LEFT: image panel ─────────────────────────────────────────────── */}
      <div className="md:w-1/2 relative overflow-hidden min-h-[60vh] md:min-h-screen">
 
        {/*
          Key fix: ALL images are mounted in the DOM simultaneously.
          Only opacity changes — no translate/slide — so there is zero
          layout jank and the browser never has to repaint the image decode.
        */}
        {brands.map((brand, i) => (
          <div
            key={brand.image}
            className="absolute inset-0"
            style={{
              opacity:    i === activeIndex ? 1 : 0,
              transition: "opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "opacity",
              // GPU-composited layer per image — avoids main-thread repaints
              transform: "translateZ(0)",
            }}
          >
            {/* Render <img> only after that specific image has loaded */}
            {imgsLoaded[i] ? (
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover"
                draggable={false}
              />
            ) : (
              /* Skeleton placeholder — same dark bg so no flash */
              <div className="w-full h-full bg-zinc-900" />
            )}
          </div>
        ))}
 
        {/* Consistent dark scrim over every image */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
 
        {/* Bottom-left label + pill dots */}
        <div className="absolute bottom-10 left-10 z-20 flex items-end gap-6">
          <div>
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-2">
              The Luxury Wing
            </p>
            <p className="text-white text-sm tracking-wide">
              American Dream, East Rutherford, NJ
            </p>
          </div>
 
          {/* Progress indicator pills */}
          <div className="flex gap-2 pb-0.5">
            {brands.map((_, i) => (
              <button
                key={i}
                onClick={() => handleBrandClick(i)}
                aria-label={`Show ${brands[i].name}`}
                className="focus:outline-none"
              >
                <div
                  style={{ transition: "width 400ms ease, background 400ms ease" }}
                  className={`h-[5px] rounded-full ${
                    i === activeIndex ? "w-6 bg-white" : "w-[5px] bg-white/30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
 
      {/* ── RIGHT: text panel ─────────────────────────────────────────────── */}
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
          Where Manhattan's most discerning shoppers come when they leave Manhattan.
          The only luxury retail environment in the metro area combining flagship
          presence with world-class entertainment.
        </p>
 
        {/* Brand rows — active row syncs with image panel */}
        <div className="space-y-0">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              onClick={() => handleBrandClick(i)}
              className={`
                flex items-center justify-between border-t py-5
                cursor-pointer group
                transition-colors duration-500
                ${i === activeIndex ? "border-white/50" : "border-white/10 hover:border-white/25"}
              `}
            >
              <span
                className={`
                  font-light tracking-wide transition-colors duration-500
                  ${i === activeIndex ? "text-white" : "text-white/40 group-hover:text-white/70"}
                `}
              >
                {brand.name}
              </span>
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
          className="
            mt-12 self-start border border-white/30 text-white
            text-xs tracking-widest uppercase px-8 py-4
            hover:bg-white hover:text-black transition-all duration-500
          "
        >
          Inquire About Luxury Space
        </motion.button>
      </motion.div>
    </section>
  );
}