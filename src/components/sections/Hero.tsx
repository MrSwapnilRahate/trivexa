"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { heroProofs } from "@/lib/constants";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-[100px]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at 40% 50%, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 40% 50%, black 20%, transparent 70%)",
          }}
        />

        {/* Glow Orbs */}
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-blue-500/[0.07] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-gold/[0.05] blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-[clamp(3rem,5vw,6rem)] items-center">
          {/* Left — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-[620px]"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold-subtle border border-gold/15 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold">
                  Rated 4.9/5 on Clutch · Top Software Company 2025
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={staggerItem}
              className="text-[clamp(3rem,2rem+5vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.05] mb-8 text-text-primary"
            >
              Engineering{" "}
              <span className="text-gradient">Premium Digital</span>{" "}
              Experiences
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-lg text-text-secondary leading-relaxed mb-10 max-w-[520px]"
            >
              TRIVEXA builds enterprise-grade digital platforms, SaaS products
              and AI-powered experiences for ambitious modern businesses.{" "}
              <span className="text-gold font-medium">100% satisfaction guaranteed.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={staggerItem} className="flex gap-5 flex-wrap mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-4.5 text-sm font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary shadow-[0_0_30px_rgba(212,175,55,0.2),0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.35),0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-350 group"
              >
                Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-10 py-4.5 text-sm font-medium tracking-widest uppercase rounded-full border border-gold-border text-text-primary hover:border-gold hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-350"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Social Proof Strip — competitive differentiator */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-8 pt-2 border-t border-white/[0.06]"
            >
              {heroProofs.map((proof) => (
                <div key={proof.label} className="pt-4">
                  <div className="text-xl font-bold text-text-primary">{proof.value}</div>
                  <div className="text-xs text-text-tertiary tracking-wider uppercase">
                    {proof.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-[1000px] hidden lg:block"
          >
            <div className="relative transform hover:rotate-y-0 transition-transform duration-600">
              {/* Main Dashboard */}
              <div className="bg-bg-card/80 backdrop-blur-xl border border-gold-border rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                  <span className="text-sm font-semibold text-text-primary">
                    Analytics Overview
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[0.65rem] text-green-500 font-medium">
                    ● Live
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Revenue", value: "$2.4M", change: "↑ 24.5%" },
                    { label: "Users", value: "48.2K", change: "↑ 18.3%" },
                    { label: "Growth", value: "94.7%", change: "↑ 12.1%" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                    >
                      <div className="text-[0.65rem] text-text-tertiary uppercase tracking-[0.15em] mb-2">
                        {m.label}
                      </div>
                      <div className="text-xl font-bold text-text-primary">
                        {m.value}
                      </div>
                      <div className="text-[0.65rem] text-green-500 mt-1">
                        {m.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="h-[120px] bg-gradient-to-b from-gold/[0.08] to-transparent rounded-xl relative overflow-hidden border border-white/[0.04]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 120"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="chart-gradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="rgba(212,175,55,0.3)" />
                        <stop offset="100%" stopColor="rgba(212,175,55,0)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,100 Q50,80 100,60 T200,40 T300,50 T400,20"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,100 Q50,80 100,60 T200,40 T300,50 T400,20 L400,120 L0,120 Z"
                      fill="url(#chart-gradient)"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -top-5 -right-8 bg-bg-card/85 backdrop-blur-2xl border border-gold-border rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-10 animate-float">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-2">
                  <svg className="w-[18px] h-[18px] stroke-gold fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div className="text-[0.7rem] font-semibold text-text-primary">Performance</div>
                <div className="text-lg font-bold text-gold">99.9%</div>
                <div className="text-[0.6rem] text-text-tertiary">Uptime Score</div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-8 -left-10 bg-bg-card/85 backdrop-blur-2xl border border-gold-border rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-10 animate-float [animation-delay:1s] [animation-duration:8s]">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-2">
                  <svg className="w-[18px] h-[18px] stroke-gold fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  </svg>
                </div>
                <div className="text-[0.7rem] font-semibold text-text-primary">Satisfaction</div>
                <div className="text-lg font-bold text-gold">99%</div>
                <div className="text-[0.6rem] text-text-tertiary">Client Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
