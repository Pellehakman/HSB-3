/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend:{
      colors: {
        'success': 'var(--green)',
        'main': 'var(--main-blue)',
        'main-active': 'var(--booking-active)',
        'booking': 'var(--booking)',
  
      },
      fontFamily: {
        'pragati': ["var(--ff-pragati)"],
        'roboto': ["var(--ff-roboto)"]
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
