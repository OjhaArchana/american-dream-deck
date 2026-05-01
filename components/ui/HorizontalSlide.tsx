"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useDeck } from "./DeckContent";

interface HorizontalSlideProps {
  children: ReactNode;
  index: number;
}

export default function HorizontalSlide({ children, index }: HorizontalSlideProps) {
  const { currentIndex, direction } = useDeck();

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  if (index !== currentIndex) return null;

  return (
    <motion.div
      key={index}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}