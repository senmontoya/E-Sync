/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'custom-blue': '#2c86a5',
          'custom-white': '#eef2eb',
          'custom-yellow': '#E5A829',
          'custom-red': '#d40b0a',
          'custom-yellow-dark': '#e29a05',
          'custom-red-dark': '#b13a0b'
      },  
    },
  },
  plugins: [],
}
