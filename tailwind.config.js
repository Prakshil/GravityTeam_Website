/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#0B0E13', // Dark background
        primary: '#3D5AFE', // Bright blue (CTA & highlights)
        secondary: '#90A4AE', // Soft gray-blue (subtext)
        accent: '#B388FF', // Neon purple glow
        light: '#F8FAFC', // Light text
        muted: '#8895A7', // Muted gray-blue text
        glowBlue: '#1E88E5', // For subtle gradients/glows
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'], // Optional for code blocks
      },
      boxShadow: {
        glow: '0 0 10px rgba(61, 90, 254, 0.6)', // Primary glow
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

