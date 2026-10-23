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
        base: "#080808",            // Primary background: Deep Black
        charcoal: "#121212",        // Secondary background: Rich Charcoal
        graphite: "#1A1A1A",        // Section background: Dark Graphite
        card: "#121212",            // Card on dark sections
        "card-hover": "#161616",
        gold: {
          DEFAULT: "#D4AF5A",       // Primary accent: Champagne Gold
          hover: "#E8C76A",         // Gold hover: Rich Gold
          light: "#E8C76A",
          muted: "rgba(212, 175, 90, 0.15)",
        },
        border: {
          DEFAULT: "#303030",       // Borders and dividers
          subtle: "#303030",
          secondary: "#454545",     // Secondary button border
          light: "#E5E0D5",         // Light card border
          gold: "#D4AF5A",
        },
        qtext: {
          primary: "#F8F6F0",       // Main text on dark: Warm White
          secondary: "#B8B8B8",     // Secondary text: Soft Gray
          muted: "#858585",         // Muted text
          dark: "#171717",          // Text on light sections
        },
        ivory: {
          DEFAULT: "#F7F5EF",       // Light section background: Warm Ivory
          card: "#FFFFFF",          // Card background on light sections
          border: "#E5E0D5",        // Light card border
          text: "#171717",          // Text on light sections
        },
        success: "#328568",
        error: "#D9534F",
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
