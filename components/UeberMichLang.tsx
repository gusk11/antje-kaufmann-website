"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2010", label: "Erstes eigenes Trainingsformat für Business English entwickelt" },
  { year: "Seit 2010", label: "Zusammenarbeit mit global agierenden Unternehmen im Bereich Business English" },
  { year: "Seit 2015", label: "Kooperation mit führenden sächsischen und anderen deutschen Hochschulen" },
  { year: "2017", label: "Zertifizierung Systemdesign für Konfliktmanagement" },
  { year: "Seit 2018", label: "Zusammenarbeit mit global agierenden Unternehmen im Bereich Konfliktmanagement und Persönlichkeitsentwicklung" },
];

export default function UeberMichLang() {
  return (
    <section className="py-12 bg-[var(--color-background-dark)]/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Mein Weg
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">
            Werdegang & Hintergrund
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-text-muted leading-relaxed"
          >
            <p>
              Meine Leidenschaft für Sprache und Kommunikation begleitet mich
              seit meinem Studium der Amerikanistik und Psychologie. Bei meiner
              Zusammenarbeit mit international agierenden Konzernen erkannte ich,
              wie entscheidend präzise und authentische Kommunikation für den
              beruflichen Erfolg ist.
            </p>
            <p>
              2010 gründete ich mein eigenes Trainingsunternehmen 2re-act.
              Seitdem habe ich mehrere Hundert Fach- und Führungskräfte begleitet
              – in Konzernen, Mittelstandsunternehmen und an Universitäten quer
              durch den deutschsprachigen Raum.
            </p>
            <p>
              Als Beraterin verbinde ich Sprachkompetenz mit einem systemischen
              Blick auf Persönlichkeit und Wirkung. Mein Ansatz: praxisnah,
              individuell abgestimmt, nachhaltig wirksam.
            </p>
            <p>
              Ich glaube daran, dass jeder Mensch in der Lage ist, seine
              Kommunikation zu transformieren – wenn er die richtige Unterstützung
              bekommt. Das ist mein Antrieb, jeden Tag aufs Neue.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-[var(--color-background-dark)]" />

            <div className="space-y-8 pl-14">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-9 top-1 w-8 h-8 rounded-full bg-[var(--color-background)] border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {item.year}
                  </span>
                  <p className="mt-1 text-text-main font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
