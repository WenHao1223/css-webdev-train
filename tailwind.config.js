export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Roboto', 'Montserrat', 'sans-serif',],
      'display': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
  ],
}

