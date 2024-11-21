/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: "100px", max: "500px" },
        tablet: { min: "501px", max: "1000px" },
        laptop: { min: "1001px", max: "1400px" },
        pc: { min: "1401px" },
      },
      colors: {
        "main-color": "#393d46",
        "dark-grey": "#9f9f9f",
        "medium-grey": "#cdcfd1",
        "light-grey": "#dcdcdc",
        "dark-white": "#ffffff",
        "medium-white": "#f5f5f5",
        "light-white": "#f6f7fb",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
