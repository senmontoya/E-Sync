/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'custom-blue': '#1f647c',
          'custom-white': '#eef2eb',
          'custom-yellow': '#E5A829',
          'custom-red': '#D02E2D',
          'custom-yellow-dark': '#e29a05',
      },
    },
  },
  plugins: [],
}
