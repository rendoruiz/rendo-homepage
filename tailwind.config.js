const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'bp360': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'grain-dust': "url('/img/dust.png')",
        'grain-dust2': "url('/img/dust2.png')",
        'grad1': "url('/img/grad1.png')",
        'grad1v': "url('/img/grad1.svg')",
        'grad2': "url('/img/grad2.png')",
        'grad2v': "url('/img/grad2.svg')",
        'grad3': "url('/img/grad3.png')",
        'grad3v': "url('/img/grad3.svg')",
        'cs1': "url('/img/cs1.svg')",
        'cs2': "url('/img/cs2.svg')",
        'cs3': "url('/img/cs3.svg')",
      }
    },
  },
  plugins: [],
}
