"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket, Users } from "lucide-react";
import {
  fadeUp,
  fadeRight,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

export function About() {
  return (
    <section
      id="about"
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
          className="mb-20"
        >
          <span className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4">
            <span className="w-6 h-px bg-gold" />
            About TRIVEXA
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Built For{" "}
            <span className="text-gradient">Scale & Excellence</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed">
            We combine world-class engineering with premium design thinking to
            build digital experiences that drive real business results.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left — Story */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <p className="text-xl text-text-primary font-medium leading-relaxed mb-6">
              TRIVEXA was founded on a simple belief:{" "}
              <span className="text-gold">
                every business deserves world-class technology.
              </span>
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              We are a team of senior engineers, designers, and strategists who
              have built and scaled digital products for companies across
              fintech, healthtech, e-commerce, and enterprise SaaS. Our
              approach combines Silicon Valley engineering rigor with premium
              design craftsmanship.
            </p>
            <p className="text-text-secondary leading-relaxed">
              From ambitious startups to Fortune 500 enterprises, we partner
              with organizations that demand excellence. Every line of code,
              every pixel, and every interaction is engineered to create
              measurable business impact.
            </p>
          </motion.div>

          {/* Right — Vision & Mission */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-6"
          >
            {[
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be the most trusted technology partner for ambitious businesses worldwide, setting new standards for digital excellence.",
              },
              {
                icon: Target,
                title: "Our Mission",
                text: "To engineer premium digital experiences that drive growth, build trust, and create lasting competitive advantages for our clients.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="glass rounded-2xl p-8 transition-all duration-350 hover:border-gold-border-hover"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/[0.08] border border-gold/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Differentiators */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Rocket,
              value: "10+",
              label: "Years Combined Expertise",
            },
            {
              icon: Users,
              value: "100%",
              label: "Senior-Level Team",
            },
            {
              icon: Target,
              value: "98%",
              label: "Client Retention Rate",
            },
            {
              icon: Eye,
              value: "24/7",
              label: "Support & Monitoring",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="text-center p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-gold-border hover:bg-gold/[0.03] transition-all duration-350"
            >
              <item.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <div className="text-2xl font-bold text-text-primary mb-2 text-gradient">
                {item.value}
              </div>
              <div className="text-xs text-text-secondary tracking-wide">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
