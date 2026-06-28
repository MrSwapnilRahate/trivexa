"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Mobile-only sticky CTA bar. Appears after the user scrolls past the hero
 * and hides once the contact section is in view (so it never covers the form).
 */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledPastHero = window.scrollY > window.innerHeight * 0.9;
      const contact = document.getElementById("contact");
      const contactInView = contact
        ? contact.getBoundingClientRect().top < window.innerHeight
        : false;
      setVisible(scrolledPastHero && !contactInView);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-bg-nav backdrop-blur-xl border-t border-gold-border"
        >
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
