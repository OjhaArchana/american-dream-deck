"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedStatsProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  subLabel?: string;
  duration?: number;
  glow?: boolean;
}

export default function AnimatedStats({
  value,
  suffix = "",
  prefix = "",
  label,
  subLabel,
  duration = 2000,
  glow = false,
}: AnimatedStatsProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <p
        className={`text-4xl md:text-5xl font-light mb-2 ${
          glow ? "text-[#C5A059] drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]" : "text-white"
        }`}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-white/70 text-sm tracking-wide">{label}</p>
      {subLabel && <p className="text-white/30 text-xs mt-1">{subLabel}</p>}
    </motion.div>
  );
}