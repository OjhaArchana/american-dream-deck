"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const eventStats = [
  { number: "500K+", label: "Event Attendees Annually" },
  { number: "150+", label: "Events Per Year" },
  { number: "20,000", label: "Max Single Event Capacity" },
  { number: "3", label: "Dedicated Event Venues" },
];

const pastEvents = [
  {
    name: "ArenaBowl 2024",
    type: "Major Sporting Event",
    attendance: "15,000",
    desc: "Hosted the AFL championship game, drawing national media coverage and sold-out attendance.",
  },
  {
    name: "Nike Air Max Day",
    type: "Brand Activation",
    attendance: "8,000+",
    desc: "Three-day product launch activation across the entertainment plaza, with live performances and exclusive drops.",
  },
  {
    name: "Holiday on Ice",
    type: "Live Entertainment",
    attendance: "50,000+",
    desc: "Multi-week seasonal spectacular using the NHL ice rink as a performance stage.",
  },
  {
    name: "Global Food Festival",
    type: "Cultural Event",
    attendance: "25,000",
    desc: "Weekend destination dining event featuring 30+ international chefs and live culinary demonstrations.",
  },
];

function BookingModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
        className="bg-zinc-950 border border-white/10 p-12 max-w-xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-4">
          Book a Venue
        </p>
        <h3 className="text-2xl font-light text-white mb-8">
          Tell Us About Your Event
        </h3>

        <div className="space-y-6">
          <div>
            <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
              Event Type
            </label>
            <select className="w-full bg-transparent border border-white/20 text-white px-4 py-3 text-sm focus:border-white/60 outline-none">
              <option value="" className="bg-zinc-900">Select type...</option>
              <option value="concert" className="bg-zinc-900">Concert / Live Performance</option>
              <option value="brand" className="bg-zinc-900">Brand Activation</option>
              <option value="corporate" className="bg-zinc-900">Corporate Event</option>
              <option value="launch" className="bg-zinc-900">Product Launch</option>
              <option value="sports" className="bg-zinc-900">Sporting Event</option>
            </select>
          </div>

          <div>
            <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
              Expected Attendance
            </label>
            <input
              type="text"
              placeholder="e.g. 5,000"
              className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none"
            />
          </div>

          <div>
            <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
              Preferred Dates
            </label>
            <input
              type="text"
              placeholder="e.g. March 2025, flexible"
              className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none"
            />
          </div>

          <div>
            <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
              Contact Email
            </label>
            <input
              type="email"
              placeholder="your@company.com"
              className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          <button
            className="flex-1 bg-white text-black text-xs tracking-widest uppercase py-4 hover:bg-white/90 transition"
          >
            Submit Inquiry
          </button>
          <button
            onClick={onClose}
            className="px-6 border border-white/20 text-white/40 text-xs tracking-widest uppercase hover:border-white/40 transition"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Events() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>

      <section id="events" className="bg-zinc-950 text-white py-32 px-6 md:px-20">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6"
        >
          Events & Platform
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light max-w-xl leading-tight"
          >
            A Global Platform,
            <br />
            <span className="italic">Not Just a Building</span>
          </motion.h2>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => setModalOpen(true)}
            className="self-start md:self-end border border-white/30 text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
          >
            Book a Venue
          </motion.button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-20">
          {eventStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-950 p-10"
            >
              <p className="text-4xl font-light text-white mb-2">{stat.number}</p>
              <p className="text-white/40 text-xs tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Past events */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-xs tracking-[0.4em] uppercase mb-8"
        >
          Past Highlights
        </motion.p>

        <div className="space-y-0">
          {pastEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border-t border-white/10 py-8 grid md:grid-cols-4 gap-6 hover:bg-white/5 transition-colors duration-300 px-4 -mx-4"
            >
              <div>
                <p className="text-white font-light text-lg">{event.name}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-widest uppercase">{event.type}</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">{event.attendance} attendees</p>
              </div>
              <div>
                <p className="text-white/40 text-sm leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>
    </>
  );
}