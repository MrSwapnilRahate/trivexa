"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-gold-deep via-gold to-gold-highlight transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
