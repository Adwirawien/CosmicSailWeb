const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['index.html', './src/**/*.{jsx,js,tsx,ts}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
