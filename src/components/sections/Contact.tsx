"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { fadeUp, fadeRight, fadeLeft, viewportSettings } from "@/lib/animations";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Submit directly to Web3Forms (browser-side)
      const web3formsData = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: formState.name,
        email: formState.email,
        company: formState.company || "Not provided",
        budget: formState.budget || "Not specified",
        message: formState.message,
        from_name: "TRIVEXA Contact Form",
        subject: `New Inquiry from ${formState.name}`,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(web3formsData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormState({ name: "", email: "", company: "", budget: "", message: "" });
      } else {
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[clamp(5rem,8vw,10rem)] bg-bg-secondary">
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
            Free Consultation
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Schedule Your{" "}
            <span className="text-gradient">Free Discovery Call</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed mx-auto">
            Get a complimentary 30-minute strategy session with a senior
            engineer. No commitment required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-[1100px] mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Let&apos;s discuss your project
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Whether you&apos;re looking to build a new product, scale an
                existing platform, or transform your digital presence — we&apos;re
                here to help.
              </p>
              <div className="flex flex-wrap gap-3">
                {["100% Satisfaction", "On-Time Delivery", "14-Day Trial"].map(
                  (g) => (
                    <span
                      key={g}
                      className="px-3 py-1.5 text-[0.65rem] font-medium tracking-wider uppercase rounded-full border border-gold/15 text-gold bg-gold/[0.04]"
                    >
                      ✓ {g}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Global · Remote-First",
                  href: "#",
                },
                {
                  icon: Phone,
                  label: "Response Time",
                  value: "Within 24 hours",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/[0.08] border border-gold/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-text-tertiary tracking-wider uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm text-text-primary group-hover:text-gold transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-text-primary text-base focus:border-gold-border-hover focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(212,175,55,0.08)] transition-all duration-200 outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-text-primary text-base focus:border-gold-border-hover focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(212,175,55,0.08)] transition-all duration-200 outline-none"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-company"
                  className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary"
                >
                  Company
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={formState.company}
                  onChange={(e) =>
                    setFormState({ ...formState, company: e.target.value })
                  }
                  className="px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-text-primary text-base focus:border-gold-border-hover focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(212,175,55,0.08)] transition-all duration-200 outline-none"
                  placeholder="Acme Inc."
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-budget"
                  className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary"
                >
                  Budget Range
                </label>
                <select
                  id="contact-budget"
                  value={formState.budget}
                  onChange={(e) =>
                    setFormState({ ...formState, budget: e.target.value })
                  }
                  className="px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-text-primary text-base focus:border-gold-border-hover focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(212,175,55,0.08)] transition-all duration-200 outline-none appearance-none cursor-pointer"
                >
                  <option value="" className="bg-bg-secondary">Select budget</option>
                  <option value="3k-5k" className="bg-bg-secondary">$3K - $5K</option>
                  <option value="5k-10k" className="bg-bg-secondary">$5K - $10K</option>
                  <option value="10k-25k" className="bg-bg-secondary">$10K - $25K</option>
                  <option value="25k-50k" className="bg-bg-secondary">$25K - $50K</option>
                  <option value="50k+" className="bg-bg-secondary">$50K+</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary"
              >
                Project Details
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-text-primary text-base focus:border-gold-border-hover focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(212,175,55,0.08)] transition-all duration-200 outline-none resize-y min-h-[140px]"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-3 py-4 text-sm font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-350 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
              ) : submitted ? (
                "Message Sent ✓"
              ) : (
                <>
                  Schedule Free Consultation
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
