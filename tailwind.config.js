/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#3a5134",
        "light-orange": "#f3cc86",
        "secondary-light-orange": "#f2bb7b",
        "light-beige": "#fefae7",
        mud: "#7e7d74",
        "primary-orange": "#E98300",
        "primary-bg": "#D5D5D4",
        "secondary-bg": "#D9D9D9",
        "primary-green": "#56876D",
      },
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
        "source-serif-pro": ["Source Serif Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
