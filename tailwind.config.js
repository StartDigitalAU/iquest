// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "iquest-gradient": "url('../images/gradient-bg.png')",
        "secondary-gradient": "url('../images/secondary-gradient-bg.png')",
        "header-bg": "url('../images/About-Header-Background.jpg')",
        "brochure-bg": "url('../images/iQuest-Brochure-BG.jpg')",
      }),
      colors: {
        "blue-lighter": "#c4dbf8",
        "blue-light": "#90bef8",
        "blue-medium": "#1984b8",
        "blue-dark": "#1a1c2c",
        "blue-darker": "#201d48",
        "blue-darkest": "#1c1c37",
        "black-light": "#131421",
      },
      fontFamily: {
        display: ["termina", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        // sans: ['forma-djr-text, sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
