"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-[clamp(5rem,8vw,10rem)] bg-bg-secondary">
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
            Our Work
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Featured{" "}
            <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed">
            Real results from real partnerships. See how we help ambitious
            companies build and scale premium digital products.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              className="group rounded-3xl overflow-hidden bg-bg-secondary border border-gold-border transition-all duration-350 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.15),0_16px_64px_rgba(0,0,0,0.5)] hover:border-gold-border-hover cursor-pointer"
            >
              {/* Image */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-bg-tertiary relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  loading="lazy"
                />
                {/* Results Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-bg-primary/80 backdrop-blur-xl border border-gold-border text-xs font-medium text-gold">
                  {project.results}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 text-text-tertiary group-hover:text-gold transition-colors" />
                </h3>
                <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[0.7rem] font-medium tracking-wide uppercase rounded-full border border-white/10 text-text-secondary bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
