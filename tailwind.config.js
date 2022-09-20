const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      screens:{
        'xs':"550px",
        ...defaultTheme.screens
      },
      extend: {
        colors: {
          'primary': 'rgb(0, 153, 255)',
        },
      }
  },
  extend: {
  },
  plugins: [],
};
