"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Therapist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="therapist" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN (TEXT) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)]">
              Hi, I'm Dr. Maya Reynolds
            </h2>

            {/* Mobile image (only visible on small screens) */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl lg:hidden">
              <Image
                src="/images/Dr.MayaReynolds.png"
                alt="Dr. Maya Reynolds, Licensed Psychologist"
                fill
                className="object-cover"
              />
            </div>

            {/* Text content */}
            <div className="space-y-4 text-lg text-[var(--color-text-secondary)]">
              <p>
                I'm a licensed clinical psychologist based in Santa Monica, California, 
                offering therapy for adults who feel overwhelmed by anxiety, stress, or 
                the lingering effects of past experiences.
              </p>
              <p>
                My work focuses on anxiety, panic, trauma, and burnout. I take a warm, 
                collaborative, and grounded approach, integrating evidence-based methods 
                such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based 
                practices, and body-oriented techniques.
              </p>
              <p>
                Trauma work is an important part of my practice. I work with adults who 
                have experienced single-incident trauma as well as more complex, 
                long-standing patterns that may stem from childhood, relationships, or 
                chronic stress. My approach is paced carefully, with an emphasis on 
                safety, stabilization, and helping clients feel more regulated in their 
                daily lives.
              </p>
              <p>
                I believe therapy works best when clients feel respected, understood, 
                and actively involved in the process. My goal is not just symptom relief, 
                but helping clients develop insight, resilience, and a stronger 
                relationship with themselves over time.
              </p>
              <p className="text-[var(--color-primary)] font-medium">
                PsyD, Clinical Psychology | Licensed in California
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-[var(--color-secondary)] text-white rounded hover:bg-[var(--color-accent)] transition-all duration-300 shadow-lg"
              >
                Let's Connect →
              </a>
            </div>
          </motion.div>

          {/* DESKTOP IMAGE (right column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Dr.MayaReynolds.png"
                alt="Dr. Maya Reynolds, Licensed Psychologist"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--color-secondary)]/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-primary)]/20 rounded-full blur-2xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
