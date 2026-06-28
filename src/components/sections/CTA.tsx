"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { fadeUp, viewportSettings } from "@/lib/animations";

export function CTA() {
  return (
    <section
      className="py-[clamp(5rem,8vw,10rem)] relative"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center relative"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />

          <span className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-gold mb-8 mx-auto">
            <span className="w-6 h-px bg-gold" />
            Start Your Project
          </span>

          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.04em] text-text-primary mb-6 max-w-[700px] mx-auto relative z-10">
            Ready To Build Something{" "}
            <span className="text-gradient">Extraordinary?</span>
          </h2>

          <p className="text-lg text-text-secondary mb-6 max-w-[550px] mx-auto relative z-10">
            Partner with TRIVEXA to create a premium digital experience that
            sets your business apart on the global stage.
          </p>

          {/* Urgency Signal — Competitive CRO tactic */}
          <div className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 rounded-full bg-gold/[0.06] border border-gold/15 relative z-10">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-medium text-gold tracking-wider">
              Limited availability for Q3 2026 — 3 project slots remaining
            </span>
          </div>

          <div className="flex items-center justify-center gap-5 flex-wrap relative z-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-4.5 text-sm font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary shadow-[0_0_30px_rgba(212,175,55,0.2),0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.35),0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-350 group"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-10 py-4.5 text-sm font-medium tracking-widest uppercase rounded-full border border-gold-border text-text-primary hover:border-gold hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-350"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
