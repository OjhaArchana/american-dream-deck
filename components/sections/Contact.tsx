"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const paths = [
  {
    title: "Lease a Space",
    subtitle: "Retail, F&B, Flagship & Pop-Up",
    desc: "Join 450+ brands in North America's highest-footfall destination. Segmented leasing paths for every category.",
    cta: "Explore Leasing",
    href: "/leasing",
    stat: "Available Q1 2025",
  },
  {
    title: "Become a Sponsor",
    subtitle: "Brand Partnerships & Activations",
    desc: "Reach 40M+ annual visitors through premium sponsorship tiers, naming rights, and immersive brand activations.",
    cta: "View Opportunities",
    href: "/sponsorship",
    stat: "Custom packages available",
  },
  {
    title: "Book a Venue",
    subtitle: "Events, Concerts & Conventions",
    desc: "500K+ event attendees per year. Three dedicated venues, 20,000-person capacity, 365 days available.",
    cta: "Book Now",
    href: "#events",
    stat: "Inquiry response within 48h",
  },
];

export default function Contact() {
  return (
    <section id="partner" className="bg-black text-white py-32 px-6 md:px-20">

      {/* Header */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6"
      >
        Partner With Us
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-light mb-6 max-w-xl leading-tight"
      >
        Ready to Be
        <br />
        <span className="italic">Part of This?</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-white/40 text-sm mb-20 max-w-md leading-relaxed"
      >
        American Dream offers three paths to commercial partnership. Each one
        connects your brand to 40 million visitors and the most-talked-about
        destination in the New York metro area.
      </motion.p>

      {/* Path cards */}
      <div className="grid md:grid-cols-3 gap-px bg-white/10">
        {paths.map((path, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="bg-black p-12 flex flex-col justify-between group hover:bg-white/5 transition-colors duration-300"
          >
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-4">
                {path.subtitle}
              </p>
              <h3 className="text-2xl font-light text-white mb-6">{path.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{path.desc}</p>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="text-white/30 text-xs mb-4">{path.stat}</p>
              <Link
                href={path.href}
                className="inline-block border border-white/30 text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-black transition-all duration-500"
              >
                {path.cta} →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <p className="text-white/20 text-xs tracking-widest uppercase">
          © American Dream · East Rutherford, New Jersey
        </p>
        <p className="text-white/20 text-xs">
          americandream.com · commercial@americandream.com
        </p>
      </motion.div>
    </section>
  );
}