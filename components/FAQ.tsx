"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, I accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and United Healthcare. I also offer superbills for out-of-network coverage. Please contact me to verify your specific plan coverage.",
  },
  {
    question: "What are your rates?",
    answer:
      "My standard session rate is $175 for a 50-minute individual therapy session. Initial consultation sessions are $200. I offer a limited number of sliding scale spots for clients with financial need. Please inquire about availability.",
  },
  {
    question: "How long are therapy sessions?",
    answer:
      "Standard therapy sessions are 50 minutes. Initial consultation sessions may run slightly longer (60-75 minutes) to allow time for comprehensive assessment and treatment planning.",
  },
  {
    question: "Do you offer evening or weekend appointments?",
    answer:
      "Yes, I understand that traditional business hours don't work for everyone. I offer limited evening appointments on Tuesdays and Thursdays, and some Saturday morning slots. Availability varies, so please contact me to discuss scheduling options.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I require 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be charged the full session fee. I understand that emergencies happen, so please reach out if you have concerns about a particular situation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            Find answers to common questions about therapy services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="border border-[var(--color-border)] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-background)] transition-colors"
              >
                <span className="text-xl font-serif font-semibold text-[var(--color-primary)] pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}