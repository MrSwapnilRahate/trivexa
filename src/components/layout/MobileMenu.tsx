"use client";

import { motion } from "framer-motion";
import { navigation } from "@/lib/constants";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-[30px] flex flex-col items-center justify-center gap-8"
    >
      {navigation.map((item, i) => (
        <motion.a
          key={item.label}
          href={item.href}
          onClick={onClose}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-semibold text-text-primary tracking-tight hover:text-gold transition-colors duration-200"
        >
          {item.label}
        </motion.a>
      ))}

      <motion.a
        href="#contact"
        onClick={onClose}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: navigation.length * 0.08, duration: 0.4 }}
        className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary"
      >
        Start A Project
      </motion.a>
    </motion.div>
  );
}
