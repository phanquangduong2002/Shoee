/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        120: "120px",
      },
      height: {},
      colors: {
        primaryColor: "#f53737",
        textColor: "#222",
      },
    },
  },
};
