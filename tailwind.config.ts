import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "888px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      base: "14px",
      sm: "18px",
      md: "20px",
      lg: "24px",
      xl: "32px",
      "2xl": "40px",
    },
    colors: {

      transparent: 'transparent',

    },
    extend: {
      fontFamily: {
        sans: ["var(--openSans)"],
        Cormorant_Upright: ['var(--cormorantUpright)']
      },

    },
  },
  plugins: [],
};
export default config;
