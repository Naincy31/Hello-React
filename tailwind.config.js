/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        customOrange: 'rgb(255, 82, 0)',
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

