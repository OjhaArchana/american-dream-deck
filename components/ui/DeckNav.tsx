"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Overview" },
  { id: "property", label: "Why Here" },
  { id: "retail", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "entertainment", label: "Entertainment" },
  { id: "events", label: "Events" },
 // { id: "partner", label: "Partner" },
];

export default function DeckNav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-white text-xs tracking-[0.3em] uppercase font-light"
        >
          American Dream
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="relative text-xs tracking-widest uppercase transition-colors duration-300 group"
            >
              <span
                className={
                  active === s.id ? "text-white" : "text-white/40 hover:text-white/80"
                }
              >
                {s.label}
              </span>
              {/* Active underline */}
              {active === s.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("partner")}
          className="hidden md:block text-xs tracking-widest uppercase border border-white/40 text-white/80 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
        >
          Partner With Us
        </button>
      </div>
    </motion.nav>
  );
}