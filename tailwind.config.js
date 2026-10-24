/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./data.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#485563",
          dark: "#374151",
          light: "#E5E7EB",
        },
        ink: "#000000",
        muted: "#545068",
        ground: "#FACC15",
        line: "#D5D9E1",
      },
      fontFamily: {
        display: ["Arial", "sans-serif"],
        body: ["Arial", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};