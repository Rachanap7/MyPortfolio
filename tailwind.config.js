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
        'regal-blue': '#25274D',
        'regal-blue-1': '#101128',
        'regal-blue-2': '#053554',
        'regal-blue-3': '#2E9CCA',
        'regal-blue-4': '#AAABB8',
        'regal-blue-5': '#464866',
        'orange': '#de5d08',
        'orange1': '#c10b1c',
      },
      inset:{
        '37%':'37%',
        '13.7rem':'13.7rem',
      },
      boxShadow:{
        'custom':"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
      backgroundColor: {
        'rgba-white-0.3': 'rgba(255, 255, 255, 0.3)',
      },
      scale: {
        '110': '1.1',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      transitionDuration: {
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
}