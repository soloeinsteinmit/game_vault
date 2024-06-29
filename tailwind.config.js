// tailwind.config.js
const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(button|input|ripple|spinner).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "pt-sans": ['"PT Sans Narrow"', "sans-serif"],
        "playwrite-fr": ['"Playwrite FR Trad"', "cursive"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
