// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => ({
        'iquest-gradient': "url('../images/iQuest-Gradient.jpg')",
        'header-bg': "url('../images/About-Header-Background.jpg')"
      }),
      colors: {
        'blue-lighter': '#c4dbf8',
        'blue-light': '#90bef8',
        'blue-dark': '#1a1c2c'
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
