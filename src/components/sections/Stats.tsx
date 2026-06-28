"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { stats } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";

function AnimatedCounter({
  target,
  suffix,
  inView,
  isFloat,
}: {
  target: number;
  suffix: string;
  inView: boolean;
  isFloat?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(isFloat ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target, isFloat]);

  return (
    <span>
      {isFloat ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      className="py-[clamp(5rem,8vw,10rem)] bg-bg-secondary"
      ref={ref}
    >
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center p-6"
            >
              <div className="text-[clamp(2.2rem,1.6rem+3vw,4rem)] font-bold tracking-[-0.04em] text-gradient leading-none mb-3">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                  isFloat={stat.value % 1 !== 0}
                />
              </div>
              <div className="text-xs text-text-secondary tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
