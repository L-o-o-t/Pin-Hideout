/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ["Silkscreen", "cursive"],
      body: ["Rubik", "sans-serif"],
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "2px 2px 1px 0px rgba(0, 0, 0, 0.6)",
      md: "4px 6px 2px 0px rgb(0 0 0 / 0.2)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none",
    },
    screens: {
      "5xl": {"max": "160.5em"},
      // => @media (max-width: 2568px) { ... }
      "4xl": {"max": "131.875em"},
      // => @media (max-width: 2110px) { ... }
      "3xl": {"max": "105.375em"},
      // => @media (max-width: 1686px) { ... }
      '2xl': {'max': '78.375em'},
      // => @media (max-width: 1254px) { ... }
      'xl': {'max': '62em'},
      // => @media (max-width: 992px) { ... }
      'lg': {'max': '50em'},
      // => @media (max-width: 800px) { ... }
      'md': {'max': '37.5em'},
      // => @media (max-width: 600px) { ... }
      'sm': {'max': '32.25em'},
      // => @media (max-width: 516px) { ... }
      'xs': {'max': '27.375em'},
      // => @media (max-width: 438px) { ... }
    },
    extend: {
      colors: {
        backgroud: "#292C35", // index backgroud
        "box-bg": "#353944",
        "box-bg-dark": "#2A2C32",
        border: "#394159",
        "border-dark": "#222222",
        "dot-line": "#404552",
        icon: "#4C535F", // icon color
        body: "#7f7f7f",
        primary: "#5F22C4",
        "primary-light": "#5533C2",
        secondary: "#d1ec1a",
      },
    },
  },
  plugins: [],
}
