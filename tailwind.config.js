// tailwind.config.js
const { nextui } = require("@nextui-org/theme");
const defaultTheme = require("tailwindcss/defaultTheme");

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
      screens: {
        "lg-tab": { max: "1124px" },
        "sm-tab": { max: "848px" },
        "sm-scard-tab": { max: "783px" },
        "xs-tab": { max: "644px" },
        "xxs-tab": { max: "560px" },
        mobile: { max: "480px" },
        "mobile-sm": { max: "360px" },
        // => @media (max-width: 1279px) { ... }

        ...defaultTheme.screens,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
