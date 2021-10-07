// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    "./src/**/*.css",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'iquest-gradient': "url('../images/gradient-bg.png')",
        'header-bg': "url('../images/About-Header-Background.jpg')"
      }),
      colors: {
        'blue-lighter': '#c4dbf8',
        'blue-light': '#90bef8',
        'blue-medium': '#1984b8',
        'blue-dark': '#1a1c2c',
        'blue-darker': '#201d48',
      },
      fontFamily: {
        display: ['termina', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
