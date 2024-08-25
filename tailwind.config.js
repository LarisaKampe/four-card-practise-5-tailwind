/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          red: '#ea5353',
          cyan: '#45d3d3',
          blue: '#549ef2',
          orange: '#fcaf4a',
        },
        secondary: {
          darkBlue: '#4c4e61',
          grayBlue: '#a3a5ae',
          lightGray: '#fafafa',
        },
      },
      fontWeight: {
        light: '100',
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};