/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1170px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", " sans-serif"],
      },
      colors: {
        white: "#FAFAFA",
        black: "#000000",
        white_second: "#F5F5F5",
        light_red: "#DB4444",
        Orange: "#FFAD33",
        Gray:'#808080'
      },
    },
  },
  plugins: [],
};
