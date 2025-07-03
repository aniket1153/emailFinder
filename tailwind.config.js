/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
