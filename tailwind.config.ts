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
        base: "#111113",
        card: "#18181B",
        "card-deep": "#141416",
        "card-hover": "#1E1E22",
        gold: {
          DEFAULT: "#C49A2C",
          light: "#E3C46A",
          muted: "rgba(196,154,44,0.15)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          gold: "rgba(196,154,44,0.35)",
        },
        qtext: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        panel: "12px",
        card: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
