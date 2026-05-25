"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text side */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/10"
          >
            Englischtraining · Business Coaching
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main mb-6"
          >
            Kommunizieren mit{" "}
            <span className="text-primary">Klarheit</span>{" "}
            und Wirkung.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-body text-lg text-text-muted leading-relaxed mb-8 max-w-lg"
          >
            Ich begleite Führungskräfte, Teams und Hochschulen dabei,
            Business English und professionelle Kommunikation auf ein neues
            Level zu bringen – praxisnah, individuell, nachhaltig.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
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

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-[420px] lg:w-96 lg:h-[500px]">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-3xl border-2 border-primary/20" />
            <div className="absolute -inset-8 rounded-3xl border border-primary/10" />

            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="Antje Kaufmann – Trainerin und Coach"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-background)]/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">Mehr erfahren</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-6 bg-primary/40 mx-auto"
        />
      </motion.div>
    </section>
  );
}
