"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const specialties = [
  {
    title: "Anxiety & Panic Treatment",
    description:
      "Evidence-based therapy for chronic worry, panic attacks, and the physical symptoms of anxiety. Learn to calm your nervous system and break free from constant overthinking.",
    image: "/images/anxiety.png",
  },
  {
    title: "Trauma & EMDR Therapy",
    description:
      "Compassionate trauma work using EMDR and body-oriented techniques for single-incident trauma and complex patterns stemming from childhood, relationships, or chronic stress.",
    image: "/images/trauma.png",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "Support for high-achievers, entrepreneurs, and professionals feeling disconnected after years of pushing through stress. Develop sustainable ways to work and live.",
    image: "/images/burnout.png",
  },
];

export default function Specialties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)] mb-4">
            Areas of Focus
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Specialized support tailored to your unique needs and goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[var(--color-border)]"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3]">

                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-serif font-semibold text-[var(--color-primary)]">
                  {specialty.title}
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {specialty.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}