"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

export function TechStack() {
  return (
    <section id="tech" className="py-[clamp(5rem,8vw,10rem)] bg-bg-secondary">
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
            Technology
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Our Tech{" "}
            <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed mx-auto">
            We leverage the most powerful modern technologies to build
            future-ready digital experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 max-w-[900px] mx-auto"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={staggerItem}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] transition-all duration-350 hover:-translate-y-1 hover:border-gold-border hover:bg-gold/[0.04] hover:shadow-[0_0_25px_rgba(212,175,55,0.1)] group cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center text-2xl transition-transform duration-350 group-hover:scale-110">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-text-primary">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
