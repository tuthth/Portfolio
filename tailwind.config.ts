import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        northwell: ['"Northwell"', "cursive"],
        "northwell-alt": ["NorthwellAlt", "cursive"],
        "northwell-swash": ["NorthwellSwash", "cursive"]
      },
      colors: {
        background: "#0f0f0f",
        surface: "#1a1a1a",
        accent: "#ff4d4d",
        accentSoft: "#ff8a80",
        muted: "#a1a1aa"
      },
      boxShadow: {
        soft: "0 8px 32px rgba(0,0,0,0.4)",
        card: "0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)"
      }
    }
  },
  plugins: []
};

export default config;
