"use client";

import Image from "next/image";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-background-dark)] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Antje Katy Kaufmann Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span className="font-semibold text-text-main">Antje Katy Kaufmann</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
            <a href="/impressum" className="hover:text-primary transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[var(--color-background-dark)] flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="https://xing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[var(--color-background-dark)] flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.654.015.024 4.919 9.023 4.919 9.023.17.308.436.663.967.663h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.308-.434-.643-.962-.643H3.648z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-background-dark)] text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Antje Katy Kaufmann · Alle Rechte vorbehalten
        </div>
      </div>
    </footer>
  );
}
