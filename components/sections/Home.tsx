"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 📝 Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Not a Mall. A Destination.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl text-gray-300"
        >
          3 Million Sq Ft. 40M Visitors. One Address.
        </motion.p>
      </div>

      {/* ⬇ Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center text-white animate-bounce">
        ↓
      </div>
    </section>
  );
}