import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        black: "#121212",
        charcoal: "#1B1B1B",
        "warm-dark": "#3A2F14",
        gold: {
          DEFAULT: "#C49A2C",
          light: "#E3C46A",
          dark: "#7F5F0E",
        },
        "gold-text-on-light": "#7F5F0E",
        "soft-ivory": "#F7F4EC",
        qtext: "#17171A",
        qmuted: "#5A5852",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gold-shade": "linear-gradient(100deg, #3A2F14 0%, #121212 50%)",
        "gold-glow": "radial-gradient(ellipse at top, rgba(196, 154, 44, 0.15), transparent 70%)",
      },
      borderRadius: {
        input: "6px",
        panel: "14px",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        gold: "0 0 0 2px rgba(196, 154, 44, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
