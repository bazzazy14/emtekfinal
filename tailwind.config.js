/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('./Images/bluebg.png')",
      },
      fontFamily: {
        'open-sans': ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

