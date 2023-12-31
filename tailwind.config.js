/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", 'sans-serif'],
      cambo: ['Cambo', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
      rubik: ['Rubik Doodle Shadow', 'sans-serif'],
      pokemonFont: ['Pokemon Solid', 'sans-serif']
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};