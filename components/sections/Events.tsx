"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
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
    videoUrl: "https://res.cloudinary.com/dpjtxigne/video/upload/v1777653138/arenabowl-clip_yq3cqq.mp4",
    posterUrl: "/images/ai-generated/arenabowl-poster.png",
  },
  {
    name: "Nike Air Max Day",
    type: "Brand Activation",
    attendance: "8,000+",
    desc: "Three-day product launch activation across the entertainment plaza, with live performances and exclusive drops.",
    videoUrl: "https://res.cloudinary.com/dpjtxigne/video/upload/v1777653096/nike-activation_hnq9gn.mp4",
    posterUrl: "/images/ai-generated/nike-poster.png",
  },
  {
    name: "Holiday on Ice",
    type: "Live Entertainment",
    attendance: "50,000+",
    desc: "Multi-week seasonal spectacular using the NHL ice rink as a performance stage.",
    videoUrl: "https://res.cloudinary.com/dpjtxigne/video/upload/v1777653078/holiday-on-ice_mcjmss.mp4",
    posterUrl: "/images/ai-generated/holiday-poster.png",
  },
  {
    name: "Global Food Festival",
    type: "Cultural Event",
    attendance: "25,000",
    desc: "Weekend destination dining event featuring 30+ international chefs and live culinary demonstrations.",
    videoUrl: "https://res.cloudinary.com/dpjtxigne/video/upload/v1777653129/food-festival_j0ovvj.mp4",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const videoEndedRef = useRef(false);

  const totalEvents = pastEvents.length;

  // Function to scroll to a specific card
  const scrollToCard = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('.event-card');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, []);

  // Handle video playback when currentIndex changes or hover changes
  useEffect(() => {
    if (hoveredEvent === currentIndex && videoRef.current) {
      // If hovered event matches current index, play video
      videoRef.current.play().catch(e => console.log("Video play failed:", e));
      videoEndedRef.current = false;
    } else if (hoveredEvent !== currentIndex && videoRef.current) {
      // If different card is hovered, pause video
      videoRef.current.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    }
  }, [currentIndex, hoveredEvent]);

  // Auto-play logic: move to next card when video ends
  const handleVideoEnded = () => {
    if (!isPlaying) return;
    videoEndedRef.current = true;
    
    // Move to next card after a short delay
    autoPlayTimeoutRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % totalEvents;
      setCurrentIndex(nextIndex);
      scrollToCard(nextIndex);
      // Reset hover state to trigger new video
      setHoveredEvent(null);
      setTimeout(() => {
        setHoveredEvent(nextIndex);
      }, 50);
    }, 500);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    };
  }, []);

  // When current index changes, ensure we scroll and auto-play next video
  useEffect(() => {
    if (currentIndex !== undefined) {
      scrollToCard(currentIndex);
      // Auto-trigger hover on the new current card after scrolling
      const timer = setTimeout(() => {
        setHoveredEvent(currentIndex);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, scrollToCard]);

  // Pause auto-play on user interaction, resume after delay
  const handleUserInteraction = useCallback(() => {
    setIsPlaying(false);
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    
    // Resume auto-play after 5 seconds of inactivity
    const resumeTimer = setTimeout(() => {
      setIsPlaying(true);
      // Trigger video end to move to next if current video is done
      if (videoEndedRef.current) {
        handleVideoEnded();
      }
    }, 5000);
    
    return () => clearTimeout(resumeTimer);
  }, [handleVideoEnded]);

  return (
    <>
      <AnimatePresence>
        {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>

      <section id="events" className="min-h-screen flex items-center bg-zinc-950 text-white px-6 py-20 md:px-20">
        <div className="w-full max-w-[1700px] mx-auto grid gap-12 lg:grid-cols-[0.44fr_0.56fr]">
          {/* Left Column - Unchanged */}
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

          {/* RIGHT COLUMN - Auto-play carousel */}
          <div 
            className="max-h-[calc(100vh-160px)] overflow-y-auto custom-scroll pr-2"
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            onTouchStart={handleUserInteraction}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-xs tracking-[0.4em] uppercase mb-5 sticky top-0 bg-zinc-950/80 backdrop-blur-sm py-2 z-10 flex justify-between items-center"
            >
              <span>Past Highlights — Watch the Energy</span>
              {isPlaying && (
                <span className="text-[10px] text-[#C5A059] animate-pulse">
                  ● Auto-playing
                </span>
              )}
            </motion.p>

            <div className="space-y-4 pb-4">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={event.name}
                  className={`event-card rounded-xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                    hoveredEvent === i 
                      ? 'border-[#C5A059]/70 shadow-lg shadow-[#C5A059]/10' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  onMouseEnter={() => {
                    setHoveredEvent(i);
                    handleUserInteraction();
                  }}
                  onMouseLeave={() => {
                    if (currentIndex === i) {
                      // If leaving the auto-play card, keep it playing
                      return;
                    }
                    setHoveredEvent(null);
                  }}
                >
                  {/* Video/Poster area */}
                  <div className="relative aspect-video">
                    {hoveredEvent === i ? (
                      <video
                        ref={hoveredEvent === i ? videoRef : null}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnded}
                        className="absolute inset-0 w-full h-full object-cover"
                        poster={event.posterUrl}
                      >
                        <source src={event.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={event.posterUrl}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

                    {/* Auto-play indicator badge for current playing card */}
                    {hoveredEvent === i && isPlaying && (
                      <div className="absolute top-3 right-3 bg-[#C5A059]/90 backdrop-blur-sm text-black text-[10px] font-bold tracking-wider px-2 py-1 rounded-full">
                        PLAYING NOW
                      </div>
                    )}
                  </div>
                  
                  {/* Description expands on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: hoveredEvent === i ? "auto" : 0, opacity: hoveredEvent === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-black/80"
                  >
                    <p className="text-white/60 text-sm p-4">{event.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Progress indicator dots */}
            <div className="flex justify-center gap-2 py-4 sticky bottom-2 bg-zinc-950/80 backdrop-blur-sm rounded-full w-fit mx-auto">
              {pastEvents.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setHoveredEvent(i);
                    scrollToCard(i);
                    handleUserInteraction();
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    hoveredEvent === i 
                      ? 'w-6 h-2 bg-[#C5A059]' 
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to event ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}