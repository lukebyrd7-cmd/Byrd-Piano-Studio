import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F1",
        walnut: "#4A3B31",
        sage: "#75866D",
        beige: "#E8DFD3",
        ivory: "#FFFDF8",
        ink: "#2F2925",
        brass: "#B48A54",
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(74, 59, 49, 0.12)",
        card: "0 10px 30px rgba(74, 59, 49, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
