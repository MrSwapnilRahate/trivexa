"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { guarantees } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

export function Guarantees() {
  return (
    <section
      id="guarantees"
      className="py-[clamp(5rem,8vw,10rem)] relative"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 mx-auto">
            <span className="w-6 h-px bg-gold" />
            Zero Risk Partnership
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Our{" "}
            <span className="text-gradient">Iron-Clad Guarantees</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed mx-auto">
            We put our money where our mouth is. Every engagement is backed by
            guarantees that no other agency offers.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid sm:grid-cols-2 gap-6 max-w-[900px] mx-auto"
        >
          {guarantees.map((g) => {
            const Icon =
              (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
                g.icon
              ] || LucideIcons.Zap;

            return (
              <motion.div
                key={g.title}
                variants={staggerItem}
                className="glass rounded-2xl p-8 transition-all duration-350 hover:-translate-y-1 hover:border-gold-border-hover hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {g.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {g.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
