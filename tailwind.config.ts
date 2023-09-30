import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0.5: "0.5rem",
      0.75: "0.75rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      16: "1rem",
      100: "100%",
    },
    screens: {
      md: "768px",
      lg: "1024px",
      vlg: "1280px",
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkBlue: "#120B48",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        1: "#000",
      },
    },
  },
  plugins: [],
};
export default config;
