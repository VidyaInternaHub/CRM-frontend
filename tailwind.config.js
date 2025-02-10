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
      "blue-light": "#36ecff",
      "blue-main": "#18afff",
      "blue-dark": "#0071bd",
      "green-button": "#bdf300",
      "gray-1": "#e1e1e1",
      "gray-2": "#bbbbbb",
      "gray-menu": "#F8F8F8",
      "black-main": "#121212",
      "black-light": "#262626",
    },

    fontSize: {
      "font-sm": "0.8rem",
      "font-base": "1rem",
      "font-xl": "1.25rem",
      "font-2xl": "1.563rem",
      "font-3xl": "1.953rem",
      "font-4xl": "2.875rem",
      "font-5xl": "3.4rem",
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
