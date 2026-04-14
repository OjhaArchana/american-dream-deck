"use client";

import { motion } from "framer-motion";

export default function Events() {
  return (
    <motion.section
      id="events"
      className="min-h-screen bg-white text-black px-6 py-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
        More Than a Venue
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-center max-w-2xl mb-16">
        American Dream is a platform for large-scale events, brand activations,
        and unforgettable experiences in one of the highest footfall destinations.
      </p>

      {/* Event Highlights */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl text-center">

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">ArenaBowl 2024</h3>
          <p className="text-gray-500 mt-2">
            Hosted major sporting events with large audiences.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Brand Activations</h3>
          <p className="text-gray-500 mt-2">
            High-impact campaigns with massive footfall.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Live Events</h3>
          <p className="text-gray-500 mt-2">
            Concerts, performances, and entertainment shows.
          </p>
        </div>

      </div>
    </motion.section>
  );
}