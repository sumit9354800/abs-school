import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: "#2563EB" },
        sky: { DEFAULT: "#38BDF8" },
        sun: "#FACC15",
        tang: "#FB923C",
        mint: "#34D399",
        cream: "#FFFCF5",
        ink: "#172554",
      },
      fontFamily: {
        head: ['"Baloo 2"', "sans-serif"],
        sans: ['"Nunito Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
