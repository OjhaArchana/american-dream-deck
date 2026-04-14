"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
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

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function Property() {
  return (
    <motion.section
      id="property"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-center">
        Why This Property
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center max-w-5xl">

        <div>
          <p className="text-4xl md:text-6xl font-bold">
            <Counter target={3000000} />+
          </p>
          <p className="text-gray-400 mt-2">Sq Ft Space</p>
        </div>

        <div>
          <p className="text-4xl md:text-6xl font-bold">
            <Counter target={450} />+
          </p>
          <p className="text-gray-400 mt-2">Retail Tenants</p>
        </div>

        <div>
          <p className="text-4xl md:text-6xl font-bold">
            <Counter target={40} />M+
          </p>
          <p className="text-gray-400 mt-2">Annual Visitors</p>
        </div>

        <div>
          <p className="text-4xl md:text-6xl font-bold">
            <Counter target={125} />
          </p>
          <p className="text-gray-400 mt-2">Avg Dwell Time (min)</p>
        </div>

        <div>
          <p className="text-4xl md:text-6xl font-bold">
            <Counter target={55} />%
          </p>
          <p className="text-gray-400 mt-2">Entertainment Space</p>
        </div>

      </div>
    </motion.section>
  );
}