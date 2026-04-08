/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50:  '#fff1f0',
          100: '#ffe0de',
          200: '#ffc6c2',
          300: '#ff9f99',
          400: '#ff6b61',
          500: '#ff3d30',
          600: '#ed1f10',
          700: '#c8160a',
          800: '#a5160d',
          900: '#881912',
          950: '#4b0705',
        },
        'surface': {
          DEFAULT: '#0a0a0f',
          1: '#111118',
          2: '#18181f',
          3: '#1f1f28',
          4: '#2a2a35',
        },
        'ink': {
          DEFAULT: '#f5f5f8',
          muted: '#8888a0',
          faint: '#3c3c50',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'pulse-dot': 'pulseDot 1.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
        'slide-in': 'slideIn 0.3s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(12px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
