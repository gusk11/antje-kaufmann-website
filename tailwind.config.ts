import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:        'var(--color-primary)',
        background:     'var(--color-background)',
        neutral:        'var(--color-neutral)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-light':'var(--color-primary-light)',
        'bg-dark':      'var(--color-background-dark)',
        'text-main':    'var(--color-text)',
        'text-muted':   'var(--color-text-muted)',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
