/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black': '#0c0916',
        'navy':'#1a1734',
        'light-navy':'#26224c', 
        'green':'#02edaf',
        'coral':'#fd0046',
        'yellow':"#ff9e00",
        'light-yellow': "#fcf3e5"
      },
      fontFamily:{
        'PTSans':['PT Sans Narrow', 'sans-serif'],
        'Montserrat':['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}

