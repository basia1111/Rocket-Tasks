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
      colors: {
        space: {
          primary: {
            DEFAULT: '#87CEEB', // Sky blue - main accent color
            light: '#A7DEFF',   // Lighter variant
            dark: '#5DA1C7',    // Darker variant
          },
          background: {
            DEFAULT: '#0A1128', // Deep space blue - main background
            light: '#1E3A6E',   // Lighter background variant
            dark: '#050914',    // Darker background variant
          },
          // Opacity variants for space-primary
          'primary-opacity': {
            20: 'rgba(135, 206, 235, 0.2)',   // border-[#87CEEB]/20
            30: 'rgba(135, 206, 235, 0.3)',   // bg-[#0A1128]/30
            40: 'rgba(135, 206, 235, 0.4)',   // placeholder-[#87CEEB]/40
            50: 'rgba(135, 206, 235, 0.5)',   // focus:border-[#87CEEB]/50
            60: 'rgba(135, 206, 235, 0.6)',   // text-[#87CEEB]/60
          },
          // Opacity variants for space-background
          'background-opacity': {
            30: 'rgba(10, 17, 40, 0.3)',      // bg-[#0A1128]/30
          }
        }
      },
      fontFamily:{
        'PTSans':['PT Sans Narrow', 'sans-serif'],
        'Montserrat':['Montserrat','sans-serif']
      },
    },
  },
  plugins: [],
}

