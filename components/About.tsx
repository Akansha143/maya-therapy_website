"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src="/images/about.png"
              alt="Calm therapy setting with journal and coffee"
              width={600}
              height={700}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)]">
              You're Functional on the Outside, But Struggling Within
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-[var(--color-text-secondary)]">
              <p>
                Many of my clients are high-achieving, thoughtful, and self-aware—but 
                internally feel exhausted, stuck in overthinking, or emotionally on edge. 
                You might appear "functional" while quietly struggling with constant worry, 
                tension in your body, or a sense that you're always bracing for something 
                to go wrong.
              </p>
              <p>
                I help adults navigate anxiety, panic, trauma, and burnout using a warm, 
                collaborative approach. Together, we'll work to help you understand both 
                the emotional and physiological sides of what you're experiencing, and 
                develop more sustainable ways of living and working.
              </p>
            </div>
<div className="pt-2 sm:pt-4">
  <a
    href="#therapist"
    className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-sm sm:text-base rounded hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
  >
    Learn More About My Approach →
  </a>
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}