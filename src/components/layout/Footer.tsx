"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, MessageCircle, Code2, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] pt-20 pb-8">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link
              href="/"
              className="text-[1.4rem] font-bold tracking-wider text-text-primary hover:text-text-primary inline-block mb-5"
            >
              TRIV<span className="text-gold">EXA</span>
            </Link>
            <p className="text-sm text-text-tertiary max-w-[300px] leading-relaxed mb-6">
              Engineering premium digital experiences for ambitious modern
              businesses worldwide.
            </p>
            {/* Newsletter */}
            <div className="flex max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-l-lg text-sm text-text-primary placeholder:text-text-tertiary focus:border-gold-border-hover focus:bg-white/[0.05] focus:outline-none transition-all duration-200"
              />
              <button className="px-4 py-2.5 bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary text-xs font-medium tracking-wider uppercase rounded-r-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-text-primary mb-6">
              Company
            </h4>
            <div className="flex flex-col gap-3.5">
              {footerLinks.company.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-tertiary hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-text-primary mb-6">
              Services
            </h4>
            <div className="flex flex-col gap-3.5">
              {footerLinks.services.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-tertiary hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-text-primary mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3.5 mb-6">
              <a
                href={siteConfig.socials.linkedin}
                className="text-sm text-text-tertiary hover:text-gold transition-colors duration-200 flex items-center gap-2"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                className="text-sm text-text-tertiary hover:text-gold transition-colors duration-200 flex items-center gap-2"
              >
                Twitter / X <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.socials.github}
                className="text-sm text-text-tertiary hover:text-gold transition-colors duration-200 flex items-center gap-2"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-text-tertiary hover:text-gold transition-colors duration-200"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Globe, href: siteConfig.socials.linkedin },
                { icon: MessageCircle, href: siteConfig.socials.twitter },
                { icon: Code2, href: siteConfig.socials.github },
                { icon: Mail, href: `mailto:${siteConfig.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center hover:border-gold-border hover:bg-gold-subtle transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-text-tertiary group-hover:text-gold" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary tracking-wider">
            {siteConfig.parent}
          </p>
        </div>
      </div>
    </footer>
  );
}
