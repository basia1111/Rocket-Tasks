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
        'light-navy':'#26224c', 
        'green':'#02edaf',
        'coral':'#fd0046',
        'yellow':"#fdb803",
        'light-yellow': "#fff9ea",
        'blue-gray':'#191f2b'
      },
      fontFamily:{
        'PTSans':['PT Sans Narrow', 'sans-serif'],
        'Montserrat':['Montserrat','sans-serif']
      },
    },
  },
  plugins: [],
}

