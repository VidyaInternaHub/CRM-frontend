/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      "light-blue": "#36ecff",
      blue: "#18afff",
      "blue-2": "#0071bd",
      "light-green": "#bdf300",
      gray: "#e1e1e1",
      "gray-2": "#bbbbbb",
      "black-2": "#262626",
      black: "#121212",
    },

    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.875rem",
      "5xl": "3.4rem",
    },
    extend: {
      fontFamily: {
        "bs-font": [
          "Montserrat",
          "Nimbus Sans L",
          "Verdana",
          "Helvetica CY",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      maxWidth: {
        nav: "1388px",
        hero: "997px",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/hero-backgroundsvg.svg')",
      },
    },
  },
  plugins: [],
});
