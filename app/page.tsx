// import Image from "next/image";
// import Home from "@/components/sections/Home";
// import Property from "@/components/sections/Property";
// import Retail from "@/components/sections/Retail";
// import Luxury from "@/components/sections/Luxury";
// import Dining from "@/components/sections/Dining";
// import Entertainment from "@/components/sections/Entertainment";
// import Events from "@/components/sections/Events";
// import Contact from "@/components/sections/Contact";
// //import SideNav from "@/components/ui/SideNav";
// import Loader from "@/components/ui/Loader";
// import DeckNav from "@/components/ui/DeckNav";

// export default function Page() {
//   return (
//     <main className="relative">
//       <Loader/>
//       <DeckNav/>

//       <Home/>
//       <Property/>
//       <Retail/>
//       <Luxury/>
//       <Dining/>
//       <Entertainment/>
//       <Events/>
//       <Contact/>
//     </main>
//   );
// }

// function HomePage() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// app/page.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "@/components/sections/Home";
import Property from "@/components/sections/Property";
import Retail from "@/components/sections/Retail";
import Luxury from "@/components/sections/Luxury";
import Dining from "@/components/sections/Dining";
import Entertainment from "@/components/sections/Entertainment";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";
import DeckNav from "@/components/ui/DeckNav";

const slides = [
  { id: "home",          component: <Home /> },
  { id: "property",      component: <Property /> },
  { id: "retail",        component: <Retail /> },
  { id: "luxury",        component: <Luxury /> },
  { id: "dining",        component: <Dining /> },
  { id: "entertainment", component: <Entertainment /> },
  { id: "events",        component: <Events /> },
  { id: "partner",       component: <Contact /> },
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  // Keyboard navigation — arrow keys
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next();
      if (e.key === "ArrowUp"   || e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const variants = {
    enter:  (dir: number) => ({ opacity: 0, y: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit:   (dir: number) => ({ opacity: 0, y: dir > 0 ? -40 : 40 }),
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">

      {/* Persistent top nav — clicking jumps to that slide */}
      <DeckNav current={current} total={slides.length} goTo={goTo} />

      {/* Full-screen slide area */}
      <div className="h-full w-full relative">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 overflow-y-auto"
          >
            {slides[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-3">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-10 h-10 border border-white/20 text-white/50
                     hover:border-white/60 hover:text-white
                     disabled:opacity-20 disabled:cursor-not-allowed
                     transition-all duration-300 flex items-center justify-center text-sm"
        >
          {/* ↑ */}
           ←
        </button>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="w-10 h-10 border border-white/20 text-white/50
                     hover:border-white/60 hover:text-white
                     disabled:opacity-20 disabled:cursor-not-allowed
                     transition-all duration-300 flex items-center justify-center text-sm"
        >
          {/* ↓ */}
          →
        </button>
      </div>

      {/* Slide counter — bottom left */}
      <div className="fixed bottom-8 left-8 z-50">
        <p className="text-white/20 text-xs tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}