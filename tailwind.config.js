/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-blue": "#16ABF8",
        "primary-red": "#ED4C5C",
        dissabled: "#F4F4F4",
        "primary-bg": "#E6E6E6",
      },
      boxShadow: {
        placeholder: "1px 2px 2px rgba(0, 0, 0, 0.08)",
        "floating-button": "16px 16px 40px rgba(122, 121, 136, 0.2)",
        "floating-button-small": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "card-shadow": "0px 2px 4px rgba(0, 0, 0, 0.1)",
        navigation: "16px 0px 40px rgba(122, 121, 136, 0.2)",
        drawer: "4px 0px 4px rgba(0,0,0,0.15)",
        floating: "16px 16px 40px rgba(122, 121, 136, 0.2)",
      },
    },
  },
  plugins: [],
};
