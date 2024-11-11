/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        color1: "#455F77",
      },
      boxShadow: {
        projectCardBoxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      },
      lineClamp: {
        2: "2",
        3: "3",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
