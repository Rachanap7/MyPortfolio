/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ruby': '#9d0b3c',
        'skin-tone': '#BAB2B5',
        'skin-tone1': '#EEE2DC',
        'skin-tone2': '#EEE2DC',
        'grey-bg': 'rgba(0,0,0,.3)',
        'color-bg': '#1f1f38',
        'color-primary': '#4db5ff',
      },
      inset:{
        '37%':'37%'
      }
    },
  },
  plugins: [],
}