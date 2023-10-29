/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    fontFamily: {
      'sans': ['"TT Trailers Trial"'],
      'sub': ['Noto Sans', 'arial'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      // 'display': ['Oswald', ...],
      // 'body': ['"Open Sans"', ...],
    },
    extend: {},
  },
  plugins: [],
}

