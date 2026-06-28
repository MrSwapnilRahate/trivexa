"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { services } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

export function Services() {
  return (
    <section
      id="services"
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
            What We Do
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Premium Digital{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed">
            We deliver enterprise-grade solutions that drive growth, scale
            operations, and create unforgettable digital experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon =
              (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
                service.icon
              ] || LucideIcons.Zap;

            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group relative glass rounded-2xl p-8 cursor-pointer transition-all duration-350 hover:-translate-y-2 hover:border-gold-border-hover hover:shadow-[0_0_30px_rgba(212,175,55,0.15),0_8px_32px_rgba(0,0,0,0.4)] border-shimmer overflow-hidden"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gold/[0.08] border border-gold/15 mb-6 transition-all duration-350 group-hover:bg-gold/15 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {service.description}
                </p>
                {/* Competitive: Service highlights */}
                {service.highlights && (
                  <div className="flex flex-wrap gap-1.5">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 text-[0.6rem] font-medium tracking-wider uppercase rounded-full border border-gold/10 text-gold/80 bg-gold/[0.04]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
