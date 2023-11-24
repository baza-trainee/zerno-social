/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 480px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      beige: '#F1DFC3',
      green: '#DFB53B',
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
