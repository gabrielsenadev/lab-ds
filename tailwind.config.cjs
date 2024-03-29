/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      s: 16,
      m: 18,
      l: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      'black': '#000',
      'white': '#fff',
      transparent: 'transparent',
      gray: {
        '900': '#121214',
        '800': '#202024',
        '400': '#7C7C8A',
        '200': '#C4C4CC',
        '100': '#E1E1E6',
      },
      cyan: {
        '500': '#81D8F7',
        '300': '#9BE1FB',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
