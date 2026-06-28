"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-text-primary pr-8 group-hover:text-gold transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-text-tertiary shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-gold" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-secondary leading-relaxed pb-6 max-w-[700px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-[clamp(5rem,8vw,10rem)] relative"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-[800px] mx-auto px-6">
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
            FAQ
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[500px] leading-relaxed mx-auto">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="glass rounded-3xl p-8 md:p-10"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={staggerItem}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
