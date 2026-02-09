"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[85vh] lg:min-h-screen flex items-center bg-gradient-to-br from-[var(--color-background)] to-white pt-8 lg:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
        
        {/* Hero Image (TOP on mobile, RIGHT on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 lg:order-2 relative w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-none"
        >
          {/* Softer, therapy-friendly shape */}
          <div 
            className="relative w-full aspect-[4/5] overflow-hidden shadow-xl ring-1 ring-black/5"
            style={{
              borderRadius: "58% 42% 55% 45% / 45% 55% 45% 55%",
            }}
          >
            <Image
              src="/images/hero.png"
              alt="Peaceful floral arrangement representing growth and healing"
              fill
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-secondary)]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Text Content (BOTTOM on mobile, LEFT on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 space-y-4 sm:space-y-5 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance">
            Reclaim Your Peace{" "}
            <span className="text-[var(--color-secondary)]">From Within</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl mx-auto lg:mx-0">
            Expert therapy for anxiety, trauma, and burnout in Santa Monica, California.
          </p>

          <div className="pt-2 sm:pt-3">
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-[var(--color-primary)] text-white text-base sm:text-lg rounded-xl hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule a Consultation →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}