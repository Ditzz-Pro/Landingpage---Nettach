/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0f1832', 900: '#070d1d' },
        brand: { DEFAULT: '#12a3bb', dark: '#0a7b90', light: '#46d1e6' },
      },
      fontFamily: { sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'] },
      boxShadow: { glow: '0 0 0 6px rgba(18,163,187,.18), 0 14px 40px rgba(18,163,187,.4)' },
    },
  },
  plugins: [],
}
