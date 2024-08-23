/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins','Sans-serif']
      },
      gridTemplateColumns:{
        '70/30' : '59% 40%'
      }
    },
  },
  variants:{
    extend:{}
  },
  plugins: [],
}

