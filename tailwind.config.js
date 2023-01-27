/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend:{
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
        'main': 'var(--main-blue)',
        'main-active': 'var(--booking-active)',
        'booking': 'var(--booking)',
        'confirm-block':'var(--confirm-block)',
        'blackish': 'var(--blackish)',
        'dark-blue': 'var(--dark-blue)',
  
      },
      fontFamily: {
        'pragati': ["var(--ff-pragati)"],
        'roboto': ["var(--ff-roboto)"],
        'kalam' : ["var(--ff-kalam)"],
        'square' : ["var(--ff-square)"],
      },
      keyframes: {
        slide: {
          'from': { top: '-6' },
          'to': {  top: '-12' },
        }
      }
    }
   
  },
  plugins: [],
};
