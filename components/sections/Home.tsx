"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — darker at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      {/* Top-left property badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute top-24 left-10 z-10"
      >
        <p className="text-white/50 text-xs tracking-[0.4em] uppercase">
          East Rutherford, New Jersey
        </p>
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white/60 text-xs tracking-[0.5em] uppercase mb-6"
        >
          The World's Premier Entertainment & Retail Destination
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-light tracking-tight leading-none"
        >
          Not a Mall.
          <br />
          <span className="italic">A Destination.</span>
        </motion.h1>

        {/* Stats line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex items-center gap-8 mt-10 text-white/60 text-sm tracking-widest"
        >
          <span>3M SQ FT</span>
          <span className="w-px h-4 bg-white/30" />
          <span>40M VISITORS</span>
          <span className="w-px h-4 bg-white/30" />
          <span>ONE ADDRESS</span>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          onClick={() =>
            document.getElementById("property")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-12 border border-white/30 text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
        >
          Explore the Opportunity
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-white/20 animate-pulse" />
      </motion.div>
    </section>
  );
}