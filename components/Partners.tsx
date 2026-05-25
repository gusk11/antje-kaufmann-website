"use client";

import { motion } from "framer-motion";

const partners = [
  "Universität München",
  "TU Berlin",
  "Siemens AG",
  "Allianz SE",
  "BMW Group",
];

export default function Partners() {
  return (
    <section className="py-16 border-y border-[var(--color-background-dark)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm uppercase tracking-widest text-text-muted mb-10 font-medium"
        >
          Vertraut von Unternehmen & Hochschulen
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              {/* Placeholder logo box */}
              <div className="border-2 border-dashed border-[var(--color-background-dark)] bg-[var(--color-background-dark)]/30 rounded-lg px-6 py-3 text-sm font-semibold text-text-muted group-hover:border-primary group-hover:text-primary transition-all duration-200 grayscale group-hover:grayscale-0">
                {name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
