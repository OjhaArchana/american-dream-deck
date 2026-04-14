"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-[999]">
      <h1 className="text-2xl tracking-widest animate-pulse">
        AMERICAN DREAM
      </h1>
    </div>
  );
}