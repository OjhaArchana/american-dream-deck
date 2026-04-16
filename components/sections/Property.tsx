"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Counter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 3000000, suffix: "+", label: "Square Feet", sub: "3× the size of Mall of America" },
  { value: 450, suffix: "+", label: "Retail Tenants", sub: "From luxury flagships to pop-ups" },
  { value: 40, suffix: "M+", label: "Annual Visitors", sub: "More than Disney World" },
  { value: 125, suffix: " min", label: "Avg Dwell Time", sub: "Industry avg is 68 min" },
  { value: 55, suffix: "%", label: "Entertainment Space", sub: "Unmatched in North America" },
  { value: 8, suffix: " miles", label: "From Midtown Manhattan", sub: "20M+ metro catchment area" },
];

const demographics = [
  { label: "Ages 25–44", pct: 68 },
  { label: "HHI $100K+", pct: 54 },
  { label: "Return Visitors", pct: 71 },
  { label: "College Educated", pct: 63 },
];

export default function Property() {
  return (
    <section id="property" className="bg-black text-white py-32 px-6 md:px-20">

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6"
      >
        The Opportunity
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-light mb-20 max-w-2xl leading-tight"
      >
        Why American Dream Is Different
      </motion.h2>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-black p-10 group hover:bg-white/5 transition-colors duration-300"
          >
            <p className="text-4xl md:text-5xl font-light text-white mb-3">
              <Counter target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-white/80 text-sm tracking-wide mb-2">{stat.label}</p>
            <p className="text-white/30 text-xs">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Demographics bar chart */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-24 border border-white/10 p-12"
      >
        <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-2">
          Visitor Profile
        </p>
        <h3 className="text-2xl font-light text-white mb-12">
          A High-Value Audience
        </h3>

        <div className="space-y-8">
          {demographics.map((d, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-white/70 tracking-wide">{d.label}</span>
                <span className="text-white">{d.pct}%</span>
              </div>
              <div className="h-px bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${d.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-white"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs mt-10 tracking-wide">
          Source: American Dream Property Analytics, 2024
        </p>
      </motion.div>
    </section>
  );
}