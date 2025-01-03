/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: 'rgb(var(--cyber-blue) / <alpha-value>)',
          pink: 'rgb(var(--cyber-pink) / <alpha-value>)',
          purple: 'rgb(var(--cyber-purple) / <alpha-value>)',
          neon: 'rgb(var(--cyber-neon) / <alpha-value>)',
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};