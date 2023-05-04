/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "vasco-blue": "#0072C6",
        "vasco-gold": "#FEBE10",
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            h1: {
              fontWeight: "700",
              fontSize: "3rem",
              lineHeight: "1.2",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h2: {
              fontWeight: "700",
              fontSize: "2.5rem",
              lineHeight: "1.2",
              marginTop: "1.5rem",
              marginBottom: "0.5rem",
            },
            h3: {
              fontWeight: "600",
              fontSize: "2rem",
              lineHeight: "1.2",
              marginTop: "1.5rem",
              marginBottom: "0.5rem",
            },
            p: {
              fontSize: "1.25rem",
              lineHeight: "1.5",
              marginTop: "1rem",
              marginBottom: "1rem",
            },
            a: {
              color: "#0072C6",
              fontWeight: "500",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
