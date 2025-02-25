import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--montserrat)"],
        roboto: ["var(--roboto)"],
      },
      colors: {
        heroBg: "#00000099",
        primary: "#74C0DB",
        secondary: "#D4A373",
        heroText:"#B3B3B3",
        borderColor:"#D9D9D9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
