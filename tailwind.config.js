/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00bfff',
        secondary: '#0a0a29',
        accent: '#1a1a4a',
      },
    },
  },
  plugins: [],
}
