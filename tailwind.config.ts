import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          green: {
            light: "#4A6A49",
            DEFAULT: "#3D5A3C",
            dark: "#2F4A2E",
          },
          lime: {
            DEFAULT: "#C5F542",
            dark: "#B0E055",
          },
          neutral: {
            light: "#C8C4C0",
            DEFAULT: "#A8A8A8",
            dark: "#8A8A8A",
          },
          dark: {
            DEFAULT: "#1F2937",
            light: "#374151",
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
