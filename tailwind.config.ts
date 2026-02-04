import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "sans-serif"]
      },
      colors: {
        background: "#050505",
        surface: "#111111",
        accent: "#ff4b4b",
        accentSoft: "#ff9b73",
        muted: "#888888"
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0,0,0,0.6)"
      }
    }
  },
  plugins: []
};

export default config;

