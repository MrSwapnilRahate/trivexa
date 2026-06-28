"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";
import { fadeUp, viewportSettings } from "@/lib/animations";
import { Star } from "lucide-react";

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-[clamp(5rem,8vw,10rem)] relative"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <span className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4">
            <span className="w-6 h-px bg-gold" />
            Client Stories
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            What Our Clients{" "}
            <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed">
            Trusted by industry leaders and ambitious startups across the globe.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        className="overflow-hidden relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex gap-8 w-max animate-ticker-slow hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="glass rounded-3xl p-8 min-w-[380px] max-w-[420px] shrink-0"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-text-primary leading-relaxed mb-8 italic relative">
                <span className="absolute -top-5 -left-1 text-[4rem] text-gold/15 font-serif leading-none select-none">
                  &ldquo;
                </span>
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep flex items-center justify-center font-bold text-sm text-bg-primary">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-text-primary">
                    {t.name}
                  </div>
                  <div className="text-xs text-text-tertiary mt-0.5">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
