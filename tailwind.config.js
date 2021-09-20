
const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}