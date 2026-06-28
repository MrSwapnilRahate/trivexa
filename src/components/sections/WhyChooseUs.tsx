"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { features } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
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
          className="mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4">
            <span className="w-6 h-px bg-gold" />
            Why TRIVEXA
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Why Leading Companies{" "}
            <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed">
            We combine world-class engineering with premium design thinking to
            build digital experiences that drive real business results.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon =
              (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
                feature.icon
              ] || LucideIcons.Zap;

            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.02] transition-all duration-350 hover:border-gold-border hover:bg-gold/[0.03]"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/[0.08] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-base font-semibold text-text-primary mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
