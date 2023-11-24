/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}', './src/partials/*.html'],
  theme: {
    screens: {
      sm: '480px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',

      '3xl': '1920px',
    },
    colors: {
      beige: '#F1DFC3',
      green: '#727D57',
      greenBTN: '#357A38',
      yellow: '#DFB53B',
      black: '#DAD8D5',
      gray: '#DAD8D5',
      grayLight: '#EFEFEE',
    },
    extend: {},
  },
  plugins: [],
};
