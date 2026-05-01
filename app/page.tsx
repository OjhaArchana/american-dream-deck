"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Home from "@/components/sections/Home";
import Property from "@/components/sections/Property";
import Retail from "@/components/sections/Retail";
import Luxury from "@/components/sections/Luxury";
import Dining from "@/components/sections/Dining";
import Entertainment from "@/components/sections/Entertainment";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";

import Loader from "@/components/ui/Loader";
import SideNav from "@/components/ui/SideNav";
import HotspotMap from "@/components/ui/HotspotMap";
import { DeckProvider } from "@/components/ui/DeckContent";
import HorizontalSlide from "@/components/ui/HorizontalSlide";
import DeckArrows from "@/components/ui/DeckArrows";

export default function Page() {
  const [entered, setEntered] = useState(false);
  const [showHotspotMap, setShowHotspotMap] = useState(false);

  // Define slides - Category mode only (journey removed)
  const slides = [
    { id: "home", component: <Home />, label: "Home", icon: "🏠" },
    { id: "property", component: <Property />, label: "Why Here", icon: "📊" },
    { id: "retail", component: <Retail />, label: "Retail", icon: "🛍️" },
    { id: "luxury", component: <Luxury />, label: "Luxury", icon: "💎" },
    { id: "dining", component: <Dining />, label: "Dining", icon: "🍽️" },
    { id: "entertainment", component: <Entertainment />, label: "Entertainment", icon: "🎢" },
    { id: "events", component: <Events />, label: "Events", icon: "🎪" },
    { id: "contact", component: <Contact goTo={() => {}} />, label: "Partner", icon: "🤝" },
  ];

  const sectionsForNav = slides.map((slide, index) => ({
    id: slide.id,
    label: slide.label,
    icon: slide.icon,
    index: index,
  }));

  if (!entered) {
    return <Loader onEnter={() => setEntered(true)} />;
  }

  return (
    <DeckProvider totalSlides={slides.length}>
      <div className="relative h-screen w-full overflow-hidden bg-[#0A0A0F]">
        {/* Hotspot Map Button */}
        <button
          onClick={() => setShowHotspotMap(true)}
          className="fixed bottom-24 right-6 z-50 bg-[#C5A059] text-black text-xs tracking-widest uppercase px-4 py-2 rounded-full hover:bg-[#E8D5A3] transition-all duration-300 shadow-lg"
        >
          📍 Explore Floor Plan
        </button>

        {/* Hotspot Map Modal */}
        {showHotspotMap && (
          <HotspotMap onClose={() => setShowHotspotMap(false)} />
        )}

        {/* Horizontal Slides */}
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            {slides.map((slide, idx) => (
              <HorizontalSlide key={idx} index={idx}>
                {slide.component}
              </HorizontalSlide>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <DeckArrows />

        {/* Side Navigation */}
        <SideNav sections={sectionsForNav} />
      </div>
    </DeckProvider>
  );
}