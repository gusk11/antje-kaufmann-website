"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { useState } from "react";

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-4">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
            Sie haben Fragen zu meinen Angeboten oder möchten ein unverbindliches
            Erstgespräch vereinbaren? Ich freue mich auf Ihre Nachricht.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="mailto:kontakt@antjekaufmann.de"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/60 border border-[var(--color-background-dark)] hover:border-primary transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted">E-Mail</p>
                <p className="font-semibold text-text-main">kontakt@antjekaufmann.de</p>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/60 border border-[var(--color-background-dark)] hover:border-primary transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <LinkedinIcon size={20} />
              </div>
              <div>
                <p className="text-sm text-text-muted">LinkedIn</p>
                <p className="font-semibold text-text-main">linkedin.com/in/antjekaufmann</p>
              </div>
            </a>

            {/* Social Media */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <p className="text-sm font-semibold text-text-main mb-4">Folgen Sie mir</p>
              <div className="flex gap-3">
                {[
                  { label: "LinkedIn", href: "#", icon: <LinkedinIcon size={18} /> },
                  {
                    label: "XING",
                    href: "#",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.654.015.024 4.919 9.023 4.919 9.023.17.308.436.663.967.663h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.308-.434-.643-.962-.643H3.648z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-background-dark)] text-text-muted hover:text-primary hover:border-primary transition-colors text-sm font-medium"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/60 backdrop-blur border border-[var(--color-background-dark)] rounded-3xl p-8 shadow-sm"
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-2">Nachricht gesendet!</h3>
                <p className="text-text-muted">Ich melde mich so bald wie möglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Ihr vollständiger Name"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-background-dark)] bg-[var(--color-background)]/60 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1.5">E-Mail</label>
                  <input
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-background-dark)] bg-[var(--color-background)]/60 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1.5">Nachricht</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Womit kann ich Ihnen helfen?"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-background-dark)] bg-[var(--color-background)]/60 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
                >
                  Nachricht senden
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
