/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    boxSizing: 'border-box',
    extend: {
      colors: {
        dark: '#202124',
        light: '#ffffff',
      },
      height: {
        '10v': '9.8vh',
        '90v': '90vh',
      },
      width: {
        '50vw': '50vw',
      },
    },
  },
  plugins: [],
};
