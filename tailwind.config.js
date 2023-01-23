/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend:{
      colors: {
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
        'main': 'var(--main-blue)',
        'main-active': 'var(--booking-active)',
        'booking': 'var(--booking)',
        'confirm-block':'var(--confirm-block)',
        'blackish': 'var(--blackish)'
  
      },
      fontFamily: {
        'pragati': ["var(--ff-pragati)"],
        'roboto': ["var(--ff-roboto)"],
        'kalam' : ["var(--ff-kalam)"],
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
