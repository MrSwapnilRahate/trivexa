"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingTiers } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

export function Pricing() {
  return (
    <section id="pricing" className="py-[clamp(5rem,8vw,10rem)] bg-bg-secondary">
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
            Engagement Models
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Flexible{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed mx-auto">
            Transparent pricing designed for businesses at every stage. No
            hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Tiers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              className={`relative rounded-3xl p-8 transition-all duration-350 ${
                tier.highlighted
                  ? "glass border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.12)] scale-[1.02]"
                  : "border border-white/[0.06] bg-white/[0.02] hover:border-gold-border"
              }`}
            >
              {/* Most Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary text-xs font-semibold tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-gradient">
                    {tier.price}
                  </span>
                  <span className="text-sm text-text-tertiary ml-1">
                    {tier.period}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center w-full py-3.5 text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-350 ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.35)] hover:-translate-y-0.5"
                    : "border border-gold-border text-text-primary hover:border-gold hover:text-gold hover:-translate-y-0.5"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
