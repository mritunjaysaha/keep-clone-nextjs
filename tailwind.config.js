/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {},
      height: {
        '10v': '9.8vh',
        '90v': '90vh',
      },
    },
  },
  plugins: [],
};
