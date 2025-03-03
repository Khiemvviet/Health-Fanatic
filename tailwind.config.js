/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      colors:{
        n: {
          1: "#fafafa", //white
          2: "#ef4444", //red
          3: "#525252", //gray
          4: "#0a0a0a", //black
        },
      },
      fontFamily: {
        t: ['Nunito'],
        h: ['Bona Nova SC'],
      },
    },
  },
  plugins: [],
}

