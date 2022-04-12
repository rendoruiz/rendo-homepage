const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'bp600': '600px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'grain-dust': "url('/img/dust.png')",
        'grain-dust2': "url('/img/dust2.png')",
      }
    },
  },
  plugins: [],
}
