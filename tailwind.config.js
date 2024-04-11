import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landingpageImg: "url(../public/landingpageImg.png)",
      },
      fontFamily: {
        primary: ["Bebas Neue", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      margin: {
        "-px": "-1px",
        "-2": "-0.5rem",
        "-4": "-1rem",
        "-8": "-2rem",
        "-16": "-4rem",
        testmargin: "900px",
      },
      borderWidth: {
        10: "10px",
      },
      transitionDuration: {
        300: "300ms", // You can add more durations if needed
      },
      transitionTimingFunction: {
        "ease-in": "ease-in", // You can add more timing functions if needed
      },
      transform: {
        transitionProperty: "transform",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "300ms",
      },
      borderRadius: {
        "radius-40": "40px",
      },
      width: {
        960: "960px",
        642: "542px",
        w80: "80%",
      },
      height: {
        560: "520px",
        444: "444px",
        300: "230px",
        1080: "1080px",
        722: "722px",
        110: "110px",
      },
      backgroundColor: {
        tanglow: "#FDCC01",
      },
      colors: {
        formbg: {
          dark: "#D3AC09",
          light: "#E9D790",
        },
      },
      abg: {
        darklow: "D3AC09",
        light: "E9D790",
      },
      screens: {
        xl: "1310px",
      },
    },
  },
  plugins: [daisyui],
};
