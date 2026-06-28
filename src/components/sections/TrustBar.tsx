"use client";

import { trustLogos } from "@/lib/constants";

export function TrustBar() {
  const doubled = [...trustLogos, ...trustLogos];

  return (
    <section className="py-16 border-t border-white/[0.04] border-b border-b-white/[0.04] overflow-hidden">
      <p className="text-center mb-12 text-xs font-medium tracking-[0.15em] uppercase text-text-tertiary">
        Built With Industry-Leading Technology
      </p>
      <div
        className="flex gap-16 w-max animate-ticker"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
        }}
      >
        {doubled.map((logo, i) => (
          <span
            key={`${logo}-${i}`}
            className="text-[clamp(1.5rem,1.2rem+1.5vw,2.2rem)] font-bold text-white/20 whitespace-nowrap tracking-wider uppercase shrink-0 hover:text-gold/50 transition-colors duration-350 cursor-default select-none"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
