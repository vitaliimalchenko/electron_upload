const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      current: colors.current,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      black: colors.black
    },
    extend: {},
  },
  plugins: [],
};
