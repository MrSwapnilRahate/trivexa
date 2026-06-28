"use client";

import { motion } from "framer-motion";
import { trustBadges } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";

export function TrustBadges() {
  return (
    <section className="py-14 border-b border-white/[0.04]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustBadges.map((badge) => (
            <motion.div
              key={badge.platform}
              variants={staggerItem}
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-gold-border hover:bg-gold/[0.03] transition-all duration-350 group cursor-default"
            >
              <div className="text-3xl shrink-0">{badge.icon}</div>
              <div>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-lg font-bold text-text-primary group-hover:text-gold transition-colors">
                    {badge.rating}
                  </span>
                  <span className="text-xs font-medium text-text-tertiary tracking-wider uppercase">
                    {badge.platform}
                  </span>
                </div>
                <div className="text-[0.7rem] text-text-secondary">{badge.label}</div>
                <div className="text-[0.6rem] text-text-tertiary mt-0.5">{badge.reviews}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
