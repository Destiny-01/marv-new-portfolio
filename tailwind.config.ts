import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-bg": "#F1F1F1",
        "dark-text": "#101010",
        "body-text": "#6F717C",
      },
      boxShadow: {
        "card-shadow":
          "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
      },
    },
  },
  plugins: [],
};
export default config;
