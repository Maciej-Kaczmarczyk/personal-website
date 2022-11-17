/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight1: {
          '0%': { transform: 'translate(0px)' },
          '100%': { transform: 'translate(300vw)'},
        },
        slideRight2: {
          '0%': { transform: 'translate(0px)' },
          '100%': { transform: 'translate(300vw)'},
        },
        slideRight3: {
          '0%': { transform: 'translate(0px)' },
          '100%': { transform: 'translate(300vw)'},
        }
      },
      animation: {
        slideRight1: 'slideRight1 30s linear infinite both',
        slideRight2: 'slideRight2 20s linear infinite both',
        slideRight3: 'slideRight3 30s linear infinite both',
      }
    },
  },
  plugins: [],
}
