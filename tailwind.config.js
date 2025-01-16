/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#68B2A0",
        darkGreen: "#2C6975",
        lightBackground: "#F8F8F8",
        darkBackground: "#22262D",
        darkBlack: "#000000",
        grayColor: "#22262D",
        yellowColor: "#FFE033",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
