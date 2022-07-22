/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myPink: 'f4acb7'
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     colors: {
//       pink: 'f4acb7'
//     }
//   },
//   plugins: [],
// }