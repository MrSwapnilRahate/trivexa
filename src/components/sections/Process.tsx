"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";

export function Process() {
  return (
    <section
      id="process"
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
            How We Work
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary">
            Our Premium{" "}
            <span className="text-gradient">Process</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative flex justify-center gap-0 py-12 pb-10 overflow-x-auto scrollbar-none"
        >
          {/* Connecting Line */}
          <div className="absolute top-[calc(3rem+25px)] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-gold-border to-transparent z-0" />

          {processSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="flex-shrink-0 w-[170px] text-center relative px-3 py-6 group"
            >
              <div className="w-[52px] h-[52px] rounded-full border-2 border-gold-border flex items-center justify-center mx-auto mb-6 text-sm font-bold text-gold bg-gold/[0.05] relative z-[2] transition-all duration-350 group-hover:bg-gradient-to-r group-hover:from-gold group-hover:via-gold-highlight group-hover:to-gold-deep group-hover:text-bg-primary group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                {step.number}
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-text-tertiary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
