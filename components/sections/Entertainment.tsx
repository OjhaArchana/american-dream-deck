"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import AnimatedStats from "@/components/ui/AnimatedStats";

const attractions = [
  {
    title: "Nickelodeon Universe",
    stat: 35,
    statSuffix: " rides & attractions",
    desc: "Western Hemisphere's largest indoor theme park. 8 acres. Year-round programming for families and brand activations.",
    tag: "Theme Park",
    image: "/images/ai-generated/theme-park-ai.png",
    videoPoster: "/images/ai-generated/theme-park-ai.png",
    videoUrl: "https://res.cloudinary.com/dpjtxigne/video/upload/v1777653062/theme-park-loop_o3funk.mp4",
    videoDuration: 8000,
  },
  {
    title: "Big SNOW",
    stat: 180000,
    statSuffix: " sq ft",
    desc: "North America's only indoor real-snow ski slope. Open 365 days a year, regardless of weather.",
    tag: "Indoor Ski",
    image: "/images/ai-generated/bigsnow-ai.png",
    videoPoster: "/images/ai-generated/bigsnow-ai.png",
    videoUrl: "https://res.cloudinary.com/dpjtxigne/video/upload/v1777653129/bigsnow-loop_nqd5hr.mp4",
    videoDuration: 7000,
  },
  {
    title: "DreamWorks Water Park",
    stat: 1,
    statPrefix: "1M+ ",
    statSuffix: "gallons",
    desc: "The largest indoor water park in the United States. 40 water attractions across 8 acres of climate-controlled space.",
    tag: "Water Park",
    image: "/images/ai-generated/waterpark-poster.png",
    videoPoster: "/images/ai-generated/waterpark-poster.png",
    videoUrl: "https://res.cloudinary.com/dpjtxigne/video/upload/v1777653094/waterpark-ai_cb6adz.mp4",
    videoDuration: 9000,
  },
  {
    title: "NHL Ice Rink",
    stat: "Olympic",
    statSuffix: " size",
    desc: "Regulation NHL-size ice rink available for public skating, private events, corporate activations, and professional tournaments.",
    tag: "Ice Rink",
    image: "/images/ai-generated/icerink-poster.png",
    videoPoster: "/images/ai-generated/icerink-poster.png",
    videoUrl: "https://res.cloudinary.com/dpjtxigne/video/upload/v1777653079/icerink-ai_mf8vyz.mp4",
    videoDuration: 6000,
  },
];

export default function Entertainment() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalCards = attractions.length;

  const scrollToCard = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('.attraction-card');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, []);

  // Play the current video without resetting others
  const playCurrentVideo = useCallback(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo && isAutoPlaying && !isUserInteracting) {
      // Only play if video is paused
      if (currentVideo.paused) {
        currentVideo.play().catch(e => console.log("Video play failed:", e));
      }
    }
  }, [currentIndex, isAutoPlaying, isUserInteracting]);

  const moveToNextCard = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalCards;
    setCurrentIndex(nextIndex);
    scrollToCard(nextIndex);
    // Reset hover to current index after moving
    setTimeout(() => {
      setHoveredIndex(nextIndex);
    }, 100);
  }, [currentIndex, totalCards, scrollToCard]);

  const handleVideoEnded = useCallback(() => {
    if (isAutoPlaying && !isUserInteracting) {
      autoPlayTimeoutRef.current = setTimeout(() => {
        moveToNextCard();
      }, 500);
    }
  }, [isAutoPlaying, isUserInteracting, moveToNextCard]);

  // Set up video event listeners when current video changes
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.addEventListener('ended', handleVideoEnded);
      return () => {
        currentVideo.removeEventListener('ended', handleVideoEnded);
      };
    }
  }, [currentIndex, handleVideoEnded]);

  // Auto-play timer based on video duration
  useEffect(() => {
    if (isAutoPlaying && !isUserInteracting && hoveredIndex === currentIndex) {
      const currentAttraction = attractions[currentIndex];
      const duration = currentAttraction.videoDuration || 8000;
      
      autoPlayTimeoutRef.current = setTimeout(() => {
        moveToNextCard();
      }, duration);
      
      return () => {
        if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
      };
    }
  }, [currentIndex, isAutoPlaying, isUserInteracting, hoveredIndex, moveToNextCard]);

  const handleUserInteraction = useCallback(() => {
    setIsUserInteracting(true);
    
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    
    userInteractionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
      // Resume auto-play
      setHoveredIndex(currentIndex);
    }, 5000);
  }, [currentIndex]);

  // Initialize auto-play on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHoveredIndex(currentIndex);
      playCurrentVideo();
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex, playCurrentVideo]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
      if (userInteractionTimeoutRef.current) clearTimeout(userInteractionTimeoutRef.current);
    };
  }, []);

  return (
    <section id="entertainment" className="min-h-screen bg-black text-white flex flex-col justify-center overflow-hidden">
      <div className="px-6 md:px-20 py-12 md:py-16">
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C5A059]/60 text-[10px] tracking-[0.3em] uppercase mb-2"
        >
          Entertainment
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-light"
          >
            No Other Property
            <br />
            <span className="italic gold-text">Comes Close</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-right"
          >
            <AnimatedStats value={55} suffix="%" label="Entertainment Space" subLabel="Highest ratio in North America" glow />
          </motion.div>
        </div>

        {/* Auto-play status indicator */}
        <div className="flex justify-end mb-3">
          {isAutoPlaying && !isUserInteracting && (
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
              </span>
              <span className="text-[#C5A059]/60 text-[9px] tracking-wider uppercase">Auto-playing • Card {currentIndex + 1} of {totalCards}</span>
            </div>
          )}
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={handleUserInteraction}
          onTouchStart={handleUserInteraction}
        >
          {attractions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              onMouseEnter={() => {
                setHoveredIndex(i);
                if (i !== currentIndex) {
                  handleUserInteraction();
                }
              }}
              onMouseLeave={() => {
                if (!isUserInteracting && isAutoPlaying && i === hoveredIndex && i !== currentIndex) {
                  setHoveredIndex(currentIndex);
                }
              }}
              className={`attraction-card relative group rounded-xl overflow-hidden border transition-all duration-500 flex-shrink-0 snap-start
                w-[calc(100vw-3rem)] md:w-[calc(50vw-3rem)] lg:w-[calc(45vw-4rem)] max-w-[500px]
                ${hoveredIndex === i 
                  ? 'border-[#C5A059]/70 shadow-lg shadow-[#C5A059]/20' 
                  : 'border-white/10 hover:border-white/30'
                }
                ${i === currentIndex && isAutoPlaying && !isUserInteracting ? 'ring-1 ring-[#C5A059]/40' : ''}
              `}
            >
              {/* Video background - shows video if it's the current playing card OR if hovered over a different card */}
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* Always show video for the current playing card */}
                {(i === currentIndex || hoveredIndex === i) && item.videoUrl ? (
                  <video
                    ref={el => { videoRefs.current[i] = el }}
                    autoPlay={i === currentIndex && !isUserInteracting}
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster={item.videoPoster}
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                
                {/* Tag badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-white/80 text-[9px] tracking-widest uppercase border border-white/30 px-2 py-0.5 backdrop-blur-sm rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Playing indicator badge - only on current card */}
                {i === currentIndex && isAutoPlaying && !isUserInteracting && (
                  <div className="absolute top-3 right-3 bg-[#C5A059]/90 backdrop-blur-sm text-black text-[8px] font-bold tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="relative flex h-1 w-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
                    </span>
                    PLAYING NOW
                  </div>
                )}
              </div>

              {/* Content area */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-light text-white tracking-wide">{item.title}</h3>
                  <span className="text-[#C5A059] text-sm md:text-base font-light whitespace-nowrap">
                    {item.statPrefix}
                    {typeof item.stat === "number" ? item.stat.toLocaleString() : item.stat}
                    {item.statSuffix}
                  </span>
                </div>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed line-clamp-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {attractions.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                scrollToCard(i);
                setHoveredIndex(i);
                handleUserInteraction();
              }}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === i 
                  ? 'w-6 h-1.5 bg-[#C5A059]' 
                  : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to attraction ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-5"
        >
          <p className="text-white/20 text-[7px] tracking-widest uppercase flex items-center justify-center gap-2">
            <span>←</span>
            <span>SCROLL TO EXPLORE</span>
            <span>→</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}