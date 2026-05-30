"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Angebote", href: "#angebote" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-background)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-background-dark)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="Antje Katy Kaufmann Logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
            <span className="font-display font-semibold text-xl tracking-tight text-text-main">
              Antje Katy Kaufmann
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Kontakt aufnehmen
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-main"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--color-background)] flex flex-col pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-medium text-text-main hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-6 py-3 rounded-full bg-primary text-white text-center font-medium hover:bg-primary-dark transition-colors"
              >
                Kontakt aufnehmen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
