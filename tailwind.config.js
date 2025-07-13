/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        light: '#f8f8f8',
        secondary: '#b0b0b0',
        primary: '#8B5CF6',
        accent: '#EC4899',
      },
      boxShadow: {
        glow: '0 0 20px rgba(139, 92, 246, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Red Hat Display', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
        abel: ['Abel', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

