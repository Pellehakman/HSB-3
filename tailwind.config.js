/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend:{
      colors: {
        'success': 'var(--green)'
  
      },
      fontFamily: {
        'ubuntu': ["var(--ff-ubuntu)"],
        'gothic': ["var(--ff-gothic)"]
      },
    }
   
  },
  plugins: [],
};
