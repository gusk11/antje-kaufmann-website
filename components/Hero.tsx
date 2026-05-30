"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background watermark */}
      <div
        className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] font-bold tracking-widest leading-none"
          style={{ color: "var(--color-background-dark)", opacity: 0.5 }}
        >
          KAUFMANN
        </span>
      </div>

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-background)]/80 to-[var(--color-background-dark)]/60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-12 w-full">
        {/* Mobile: flex-col (text → image → buttons). Desktop: 2-col grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

          {/* Text: badge + heading + paragraph */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/10"
            >
              Englischtraining · Kompetenzentwicklung
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main mb-5"
            >
              Kommunizieren mit{" "}
              <span className="text-primary">Klarheit</span>{" "}
              und Wirkung.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-body text-lg text-text-muted leading-relaxed mb-6 max-w-lg"
            >
              Ich begleite Führungskräfte, Teams und Hochschulen dabei,
              Business English und professionelle Kommunikation auf ein neues
              Level zu bringen – praxisnah, individuell, nachhaltig.
            </motion.p>

            {/* Buttons – desktop only (shown inline with text column) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="hidden lg:flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#kontakt"
                className="px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors duration-200 text-center shadow-md shadow-primary/20"
              >
                Jetzt Gespräch anfragen
              </a>
              <a
                href="#angebote"
                className="px-8 py-3.5 rounded-full border-2 border-[var(--color-background-dark)] text-text-main font-semibold hover:border-primary hover:text-primary transition-colors duration-200 text-center"
              >
                Meine Angebote
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-72 h-[360px] sm:w-80 sm:h-[420px] lg:w-96 lg:h-[500px]">
              <div className="absolute -inset-4 rounded-3xl border-2 border-primary/20" />
              <div className="absolute -inset-8 rounded-3xl border border-primary/10" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.png"
                  alt="Antje Katy Kaufmann – Trainerin und Coach"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-background)]/60 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Buttons – mobile only (below image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex lg:hidden flex-col sm:flex-row gap-4 mt-10"
          >
            <a
              href="#kontakt"
              className="px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors duration-200 text-center shadow-md shadow-primary/20"
            >
              Jetzt Gespräch anfragen
            </a>
            <a
              href="#angebote"
              className="px-8 py-3.5 rounded-full border-2 border-[var(--color-background-dark)] text-text-main font-semibold hover:border-primary hover:text-primary transition-colors duration-200 text-center"
            >
              Meine Angebote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
