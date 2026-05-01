// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// const eventStats = [
//   { number: "500K+", label: "Event Attendees Annually" },
//   { number: "150+", label: "Events Per Year" },
//   { number: "20,000", label: "Max Single Event Capacity" },
//   { number: "3", label: "Dedicated Event Venues" },
// ];

// const pastEvents = [
//   {
//     name: "ArenaBowl 2024",
//     type: "Major Sporting Event",
//     attendance: "15,000",
//     desc: "Hosted the AFL championship game, drawing national media coverage and sold-out attendance.",
//   },
//   {
//     name: "Nike Air Max Day",
//     type: "Brand Activation",
//     attendance: "8,000+",
//     desc: "Three-day product launch activation across the entertainment plaza, with live performances and exclusive drops.",
//   },
//   {
//     name: "Holiday on Ice",
//     type: "Live Entertainment",
//     attendance: "50,000+",
//     desc: "Multi-week seasonal spectacular using the NHL ice rink as a performance stage.",
//   },
//   {
//     name: "Global Food Festival",
//     type: "Cultural Event",
//     attendance: "25,000",
//     desc: "Weekend destination dining event featuring 30+ international chefs and live culinary demonstrations.",
//   },
// ];

// function BookingModal({ onClose }: { onClose: () => void }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 40 }}
//         transition={{ duration: 0.4 }}
//         className="bg-zinc-950 border border-white/10 p-12 max-w-xl w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-4">
//           Book a Venue
//         </p>
//         <h3 className="text-2xl font-light text-white mb-8">
//           Tell Us About Your Event
//         </h3>

//         <div className="space-y-6">
//           <div>
//             <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
//               Event Type
//             </label>
//             <select className="w-full bg-transparent border border-white/20 text-white px-4 py-3 text-sm focus:border-white/60 outline-none">
//               <option value="" className="bg-zinc-900">Select type...</option>
//               <option value="concert" className="bg-zinc-900">Concert / Live Performance</option>
//               <option value="brand" className="bg-zinc-900">Brand Activation</option>
//               <option value="corporate" className="bg-zinc-900">Corporate Event</option>
//               <option value="launch" className="bg-zinc-900">Product Launch</option>
//               <option value="sports" className="bg-zinc-900">Sporting Event</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
//               Expected Attendance
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. 5,000"
//               className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
//               Preferred Dates
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. March 2025, flexible"
//               className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
//               Contact Email
//             </label>
//             <input
//               type="email"
//               placeholder="your@company.com"
//               className="w-full bg-transparent border border-white/20 text-white placeholder-white/20 px-4 py-3 text-sm focus:border-white/60 outline-none"
//             />
//           </div>
//         </div>

//         <div className="flex gap-4 mt-10">
//           <button
//             className="flex-1 bg-white text-black text-xs tracking-widest uppercase py-4 hover:bg-white/90 transition"
//           >
//             Submit Inquiry
//           </button>
//           <button
//             onClick={onClose}
//             className="px-6 border border-white/20 text-white/40 text-xs tracking-widest uppercase hover:border-white/40 transition"
//           >
//             Cancel
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function Events() {
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <>
//       <AnimatePresence>
//         {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
//       </AnimatePresence>

//       <section id="events" className="h-full flex items-center bg-zinc-950 text-white px-6 py-12 md:px-20 md:py-14">
//         <div className="w-full max-w-[1700px] mx-auto grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
//           <div>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-white/40 text-xs tracking-[0.4em] uppercase mb-5"
//             >
//               Events & Platform
//             </motion.p>

//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-5xl font-light max-w-xl leading-tight mb-8"
//             >
//               A Global Platform,
//               <br />
//               <span className="italic">Not Just a Building</span>
//             </motion.h2>

//             <motion.button
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               onClick={() => setModalOpen(true)}
//               className="border border-white/30 text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-black transition-all duration-500"
//             >
//               Book a Venue
//             </motion.button>

//             <div className="grid grid-cols-2 gap-px bg-white/10 mt-8">
//               {eventStats.map((stat, i) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   className="bg-zinc-950 p-5 md:p-6 min-h-[120px]"
//                 >
//                   <p className="text-3xl md:text-4xl font-light text-white mb-2">{stat.number}</p>
//                   <p className="text-white/40 text-xs tracking-wide leading-relaxed">{stat.label}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-white/40 text-xs tracking-[0.4em] uppercase mb-5"
//             >
//               Past Highlights
//             </motion.p>

//             <div className="border-b border-white/10">
//               {pastEvents.map((event, i) => (
//                 <motion.div
//                   key={event.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1, duration: 0.6 }}
//                   className="border-t border-white/10 py-5 grid md:grid-cols-[0.9fr_0.85fr_0.75fr_1.45fr] gap-4 hover:bg-white/5 transition-colors duration-300 px-4 -mx-4"
//                 >
//                   <p className="text-white font-light text-base">{event.name}</p>
//                   <p className="text-white/40 text-[11px] tracking-widest uppercase">{event.type}</p>
//                   <p className="text-white/60 text-sm">{event.attendance} attendees</p>
//                   <p className="text-white/40 text-sm leading-relaxed">{event.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedStats from "@/components/ui/AnimatedStats";

const eventStats = [
  { value: 500000, suffix: "+", label: "Event Attendees Annually" },
  { value: 150, suffix: "+", label: "Events Per Year" },
  { value: 20000, suffix: "", label: "Max Single Event Capacity" },
  { value: 3, suffix: "", label: "Dedicated Event Venues" },
];

const pastEvents = [
  {
    name: "ArenaBowl 2024",
    type: "Major Sporting Event",
    attendance: "15,000",
    desc: "Hosted the AFL championship game, drawing national media coverage and sold-out attendance.",
    videoUrl: "/videos/arenabowl-clip.mp4",
    posterUrl: "/images/ai-generated/arenabowl-poster.png",
  },
  {
    name: "Nike Air Max Day",
    type: "Brand Activation",
    attendance: "8,000+",
    desc: "Three-day product launch activation across the entertainment plaza, with live performances and exclusive drops.",
    videoUrl: "/videos/nike-activation.mp4",
    posterUrl: "/images/ai-generated/nike-poster.png",
  },
  {
    name: "Holiday on Ice",
    type: "Live Entertainment",
    attendance: "50,000+",
    desc: "Multi-week seasonal spectacular using the NHL ice rink as a performance stage.",
    videoUrl: "/videos/holiday-on-ice.mp4",
    posterUrl: "/images/ai-generated/holiday-poster.png",
  },
  {
    name: "Global Food Festival",
    type: "Cultural Event",
    attendance: "25,000",
    desc: "Weekend destination dining event featuring 30+ international chefs and live culinary demonstrations.",
    videoUrl: "/videos/food-festival.mp4",
    posterUrl: "/images/ai-generated/foodfest-poster.png",
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
        {/* Form fields remain the same */}
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
          <button className="flex-1 bg-white text-black text-xs tracking-widest uppercase py-4 hover:bg-white/90 transition">
            Submit Inquiry
          </button>
          <button onClick={onClose} className="px-6 border border-white/20 text-white/40 text-xs tracking-widest uppercase hover:border-white/40 transition">
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  return (
    <>
      <AnimatePresence>
        {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>

      <section id="events" className="min-h-screen flex items-center bg-zinc-950 text-white px-6 py-20 md:px-20">
        <div className="w-full max-w-[1700px] mx-auto grid gap-12 lg:grid-cols-[0.44fr_0.56fr]">
          {/* Left Column */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-xs tracking-[0.4em] uppercase mb-5"
            >
              Events & Platform
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-light max-w-xl leading-tight mb-8"
            >
              A Global Platform,
              <br />
              <span className="italic gold-text">Not Just a Building</span>
            </motion.h2>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onClick={() => setModalOpen(true)}
              className="border border-white/30 text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-black transition-all duration-500"
            >
              Book a Venue
            </motion.button>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {eventStats.map((stat, i) => (
                <div key={stat.label} className="border border-white/10 p-5">
                  <AnimatedStats value={stat.value} suffix={stat.suffix} label={stat.label} glow />
                </div>
              ))}
            </div>
          </div>

           {/* RIGHT COLUMN - Scrollable */}
          <div className="max-h-[calc(100vh-160px)] overflow-y-auto custom-scroll pr-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-xs tracking-[0.4em] uppercase mb-5 sticky top-0 bg-zinc-950/80 backdrop-blur-sm py-2 z-10"
            >
              Past Highlights — Watch the Energy
            </motion.p>

            <div className="space-y-4 pb-4">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredEvent(i)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  className="relative rounded-xl overflow-hidden border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 cursor-pointer"
                >
                  {/* Video that plays on hover */}
                  <div className="relative aspect-video">
                    {hoveredEvent === i ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        poster={event.posterUrl}
                      >
                        <source src={event.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={event.posterUrl}
                        alt={event.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Stats overlay on video */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/60 text-[10px] tracking-widest uppercase">{event.type}</p>
                          <p className="text-white font-light text-lg">{event.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#C5A059] text-sm font-light">{event.attendance}</p>
                          <p className="text-white/40 text-[10px]">attendees</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description expands on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: hoveredEvent === i ? "auto" : 0, opacity: hoveredEvent === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-black/80 px-4"
                  >
                    <p className="text-white/60 text-sm py-3">{event.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}