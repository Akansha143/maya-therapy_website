"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Shield } from "lucide-react";

export default function OurOffice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: MapPin,
      title: "Santa Monica Location",
      description: "Conveniently located at 123th Street 45 W, Santa Monica, CA 90401 with easy access and parking",
    },
    {
      icon: Clock,
      title: "Flexible Appointments",
      description: "In-person and secure telehealth options available throughout California",
    },
    {
      icon: Shield,
      title: "Calm & Grounding Space",
      description: "A quiet office with natural light and comfortable, uncluttered environment designed to help you feel at ease",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[var(--color-background)] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)] mb-4">
            A Calm Space for Healing
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A quiet, private space in Santa Monica designed to feel calm and grounding
          </p>
        </motion.div>

        {/* Office Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/office1.jpeg"
              alt="Comfortable therapy office waiting area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/office2.jpeg"
              alt="Peaceful therapy session room"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center space-y-3"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)]/10">
                  <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[var(--color-primary)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Office Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-[var(--color-primary)]/5 rounded-lg p-8 text-center"
        >
          <p className="text-lg text-[var(--color-text-secondary)] mb-4">
            My office is designed to be a sanctuary away from the stresses of daily life. From the moment you arrive, you'll find a calm, grounding atmosphere with natural light and a comfortable, uncluttered environment that promotes relaxation and openness. Clients often share that the space itself helps them feel more at ease.
          </p>
          <p className="text-lg text-[var(--color-text-secondary)]">
            I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located throughout California.
          </p>
        </motion.div>
      </div>
    </section>
  );
}