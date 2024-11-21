/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
