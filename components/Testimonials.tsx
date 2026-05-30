"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sandra Meier",
    role: "Professorin, LMU München",
    quote:
      "Antje Katy Kaufmanns Training hat meine wissenschaftliche Präsentation auf internationalem Parkett grundlegend verändert. Professionell, empathisch und überaus effektiv.",
    initials: "SM",
  },
  {
    name: "Thomas Bauer",
    role: "Vertriebsleiter, Industrieunternehmen",
    quote:
      "Dank des Business-English-Coachings konnte unser Team Verhandlungen mit internationalen Partnern souverän führen. Die Investition hat sich vielfach ausgezahlt.",
    initials: "TB",
  },
  {
    name: "Julia Hoffmann",
    role: "Projektmanagerin, Tech-Start-up",
    quote:
      "Ich habe in kurzer Zeit enorm an Sicherheit gewonnen. Antje versteht es, auf individuelle Stärken einzugehen und genau dort anzusetzen, wo es wirklich wehtut.",
    initials: "JH",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="referenzen" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Stimmen meiner Kunden
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">
            Was andere sagen
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/60 backdrop-blur border border-[var(--color-background-dark)] rounded-3xl p-10 shadow-sm text-center"
            >
              <Quote size={36} className="text-primary/30 mx-auto mb-6" />
              <p className="text-xl text-text-main leading-relaxed mb-8 font-medium italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-text-main">{t.name}</p>
                  <p className="text-sm text-text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--color-background-dark)] flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-primary w-6" : "bg-[var(--color-background-dark)]"
                }`}
              />
            ))}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--color-background-dark)] flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
