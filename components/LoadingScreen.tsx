"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade-out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Remove from DOM after fade animation completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] ${
        isFading ? "loading-fade-out" : ""
      }`}
    >
      {/* Logo */}
      <div className="loading-slide-up flex items-baseline gap-2.5">
        <span className="font-northwell text-6xl sm:text-7xl text-zinc-100">
          Tuan Nguyen
        </span>
      </div>

      {/* Animated accent line */}
      <div className="mt-6 h-[2px] bg-accent/80 rounded-full loading-pulse-line" />

      {/* Subtitle */}
      <p
        className="mt-5 text-xs tracking-[0.3em] uppercase text-zinc-500 loading-slide-up"
        style={{ animationDelay: "0.3s", opacity: 0 }}
      >
        Backend / .NET Developer
      </p>
    </div>
  );
}
