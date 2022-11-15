/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        redrose: ["Red Rose", "cursive"]
      },

      animation: {
        'scroll': 'scroll 3s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(calc(-20px * 1))' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
