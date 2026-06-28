"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { ScrollProgress } from "./ScrollProgress";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-350",
          scrolled
            ? "bg-bg-nav backdrop-blur-xl border-b border-gold-border py-3"
            : "py-5"
        )}
      >
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-[1.4rem] font-bold tracking-wider text-text-primary hover:text-text-primary"
          >
            TRIV<span className="text-gold">EXA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-text-secondary tracking-wide hover:text-gold transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-xs font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-350"
            >
              Free Consultation
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span
                className={cn(
                  "w-6 h-[1.5px] bg-text-primary transition-all duration-200",
                  mobileOpen && "rotate-45 translate-y-[6.5px]"
                )}
              />
              <span
                className={cn(
                  "w-6 h-[1.5px] bg-text-primary transition-all duration-200",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-6 h-[1.5px] bg-text-primary transition-all duration-200",
                  mobileOpen && "-rotate-45 -translate-y-[6.5px]"
                )}
              />
            </button>
          </div>
        </div>

        <ScrollProgress />
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
