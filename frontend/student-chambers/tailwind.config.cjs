/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#5E67E6",
          green: "#0BDE66",
          red: "#FF2244",
        }
      },

      width: {
       'header-nav': '580px',
      },

      maxWidth: {
        'container': '1100px'
      }
  }
},
  // plugins: [require('@tailwindcss/typography')],

};