/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hind Vadodara", defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        screen: "1400px",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      purple: "#331B3B",
      yellow: "#FDC221",
      blue: "#ECF7FF",
      pink: "#FFDED4",
    },
  },
  plugins: [],
};
