"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const challenges = [
  "Constant worry, overthinking, or feeling emotionally on edge",
  "Panic attacks or physical symptoms of anxiety (tension, racing heart, difficulty sleeping)",
  "Feeling exhausted or burnt out from years of pushing through stress",
  "Impact of past trauma affecting your relationships, confidence, or sense of safety",
  "Perfectionism and high internal pressure that leave you feeling disconnected",
];

export default function HopeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Desktop Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none hidden lg:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
              alt="Person finding peace and clarity"
              width={600}
              height={700}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)]">
              You Don't Have to Face This Alone
            </h2>

            {/* Mobile Image (below heading) */}
            <div className="relative w-full max-w-md mx-auto lg:hidden">
              <Image
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
                alt="Person finding peace and clarity"
                width={600}
                height={700}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)]">
              If you're experiencing any of these, there's hope:
            </p>

            <ul className="space-y-2 sm:space-y-3">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={challenge}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-secondary)] text-xl sm:text-2xl">•</span>
                  <span>{challenge}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] pt-2 sm:pt-4">
              With empathy and evidence-based approaches, we'll work together to
              navigate these challenges and help you move toward the life you
              want to live.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
