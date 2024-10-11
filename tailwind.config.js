// config file extends all default tailwind css classes
// primary-lightest colors are one palette 
// pink-dark colors are optional palette

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      padding: {
        '13': '3.25rem'
      },
      colors: {
        'primary': '#D7737B',
        'secondary': '#7C5051',
        'tertiary': '#901A14',
        'darkest': '#242221',
        'lightest': '#F6DCD8',
        'pink': '#f4acb7',
        'ltpink': '#f9d2d8',
        'peach': '#ffcdb2',
        'tangerine': '#ffb4a2',
        'rust': '#e5989b',
        'wine': '#b5838d',
        'dark': '#6d6875'
      }
    },
  },
  plugins: [],
}
