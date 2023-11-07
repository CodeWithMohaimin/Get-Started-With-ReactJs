/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "430px",
      md: "500px",
      lg: "1080px",
    },

    extend: {},
  },
  plugins: [],
};
