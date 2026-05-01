"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface DeckContextType {
  currentIndex: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  direction: "left" | "right";
}

const DeckContext = createContext<DeckContextType | undefined>(undefined);

export function DeckProvider({ children, totalSlides }: { children: ReactNode; totalSlides: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(Math.max(0, Math.min(index, totalSlides - 1)));
  }, [currentIndex, totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setDirection("right");
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setDirection("left");
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  return (
    <DeckContext.Provider value={{ currentIndex, totalSlides, goToSlide, nextSlide, prevSlide, direction }}>
      {children}
    </DeckContext.Provider>
  );
}

export function useDeck() {
  const context = useContext(DeckContext);
  if (!context) throw new Error("useDeck must be used within DeckProvider");
  return context;
}