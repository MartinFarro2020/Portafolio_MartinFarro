/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
          keyframes:{
            fullSpin:{
              '100%':{
                transform:'rotate(360deg)'
              }
            },
            invertSpin:{
              '100%':{
                transform:'rotate(-360deg)'
              }
            }
          },
          animation:{
            fullSpin:'fullSpin 4s linear infinite',
            invertSpin:'invertSpin 4s linear infinite',
          }
    },
    colors: {
      "dark-blue": "hsl(209, 23%, 22%)",
      "very-dark-blue-bg": "hsl(207, 26%, 17%)",
      "very-dark-blue-text": "hsl(200, 15%, 8%)",
      "dark-gray": "hsl(0, 0%, 52%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      "nunito-sans": ["Nunito Sans", "sans-serif"],
      "dongle-sans": ["Dongle", "sans-serif"],
      "fredoka-sans": ["Fredoka", "sans-serif"],
      "gabarito-sans":["Gabarito", "sans-serif"],
    },
  },
  plugins: [],
}


