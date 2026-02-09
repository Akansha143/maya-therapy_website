"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Reaching out for support takes courage. I'm here to help you navigate
            your challenges and work toward a healthier, more fulfilling life.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[var(--color-primary)] text-lg font-semibold rounded hover:bg-[var(--color-background)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Book Your Free Consultation
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Free 15-minute phone consultation • Convenient scheduling • Telehealth available
          </p>
        </motion.div>
      </div>
    </section>
  );
}