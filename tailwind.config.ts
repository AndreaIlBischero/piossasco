import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        crema: "#fff7ec",
        terracotta: "#c76a42",
        borgo: "#2f4f46",
        sole: "#f3bc66"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(47,79,70,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
