import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#202020",
      white: "#FFFFFF",
      champagne: "#D8B988",
      linkBlue: "#0000FF",
      pink: "#FBF5F3",
      transparent: "transparent",
    },
    fontSize: {
      paragraph: [
        "1rem",
        {
          lineHeight: "20px",
          letterSpacing: "0.01rem",
          fontWeight: "300",
        },
      ],
      subheading: [
        "1rem",
        {
          letterSpacing: "0.02rem",
          fontWeight: "600",
        },
      ],
      heading: [
        "2.25rem",
        {
          letterSpacing: "0.0225rem",
          fontWeight: "300",
        },
      ],
    },
    fontFamily: {
      livvic: "Livvic",
    },
    screens: {
      phone: "425px",
      tablet: "800px",
      desktop: "1280px",
    },
    extend: {
      margin: {
        15: "60px",
      },
      padding: {
        15: "60px",
      },
      gap: {
        15: "60px",
      },
    },
  },
  plugins: [],
} satisfies Config;
