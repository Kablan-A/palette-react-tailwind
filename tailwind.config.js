/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./images/heroBg.png')",
      },
      backgroundColor: {
        lightBlack: "#1F1E1E",
      },
      boxShadow: {
        button: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        footerSignIn: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      },
    },
  },
  plugins: [],
};
