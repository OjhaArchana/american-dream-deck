"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "property",
  "retail",
  "luxury",
  "dining",
  "entertainment",
  "events",
  "contact",
];

export default function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (window.scrollY >= top - 200) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`w-3 h-3 rounded-full transition-all ${
            active === section ? "bg-white scale-125" : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
}