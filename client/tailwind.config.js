/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(32, 40, 56, 0.2) 1px 1px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;',
      },
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

