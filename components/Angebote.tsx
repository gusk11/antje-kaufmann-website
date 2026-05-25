"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, Users } from "lucide-react";

const cards = [
  {
    icon: <BookOpen size={28} className="text-primary" />,
    title: "Business English Training",
    text: "Maßgeschneidertes Englischtraining für Unternehmen – von Präsentations- und Verhandlungssprache bis hin zu E-Mail-Kommunikation. Einzel- und Gruppenformate, online und vor Ort.",
  },
  {
    icon: <Users size={28} className="text-primary" />,
    title: "Englisch für Hochschulen",
    text: "Gezielte Sprachförderung für Studierende und wissenschaftliches Personal: akademisches Schreiben, Konferenzsprache und fachspezifische Kommunikation auf internationalem Niveau.",
  },
  {
    icon: <Briefcase size={28} className="text-primary" />,
    title: "Business Coaching",
    text: "Individuelles Coaching für Führungskräfte und Fachexperten. Ich unterstütze Sie beim Aufbau von Kommunikationsstärke, Auftritt und persönlicher Wirkung im beruflichen Kontext.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Angebote() {
  return (
    <section id="angebote" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Was ich anbiete
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">
            Meine Angebote
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={card}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-white/60 backdrop-blur border border-[var(--color-background-dark)] rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                {c.icon}
              </div>
              <h3 className="text-lg font-bold text-text-main">{c.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">{c.text}</p>
              <a
                href="#kontakt"
                className="mt-auto text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Anfragen →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
