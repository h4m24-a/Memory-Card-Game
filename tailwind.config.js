const {nextui} = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", 'sans-serif'],
      cambo: ['Cambo', 'serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

