"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Globe, GraduationCap } from "lucide-react";

const badges = [
  { icon: <Globe size={18} />, label: "Zertifizierte Englischtrainerin" },
  { icon: <Award size={18} />, label: "ICF-zertifizierter Business Coach" },
  { icon: <GraduationCap size={18} />, label: "15+ Jahre Erfahrung" },
];

export default function UeberMichKurz() {
  return (
    <section id="ueber-mich" className="py-24 bg-[var(--color-background-dark)]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-background)] shadow-xl">
                <Image
                  src="/images/portrait-3.png"
                  alt="Antje Kaufmann – Porträt"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Über mich
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-5">
              Hallo, ich bin{" "}
              <span className="text-primary">Antje Kaufmann</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Als Trainerin und Coach begleite ich Menschen dabei, ihre
              Kommunikation im Business-Kontext auf ein neues Level zu heben –
              authentisch, klar und wirkungsvoll.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Meine Arbeit verbindet tiefes Sprachwissen mit praktischer
              Coaching-Kompetenz. Ich arbeite mit Unternehmen, Hochschulen und
              Einzelpersonen, die ihren internationalen Auftritt stärken wollen.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 border border-[var(--color-background-dark)] text-sm text-text-main"
                >
                  <span className="text-primary">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
