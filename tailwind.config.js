/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #ffeb3b 10%, #ff9800 40%, #e91e63 70%, #9c27b0 100%)',
      },
    },
  },
  plugins: [],
}