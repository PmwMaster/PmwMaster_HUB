import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        vice: {
          pink: "#FF007A",
          magenta: "#F43F5E",
          cyan: "#00F0FF",
          purple: "#8B5CF6",
          dark: "#06070E",
          surface: "#0D0E1A",
          surfaceLight: "#15172A",
          orange: "#FB923C",
        },
        pmw: {
          dark: "#06070E",
          surface: "#0D0E1A",
          surfaceLight: "#15172A",
          purple: "#8B5CF6",
          purpleLight: "#A78BFA",
          blue: "#00F0FF",
          clover: "#22C55E",
          cloverDark: "#16A34A",
          text: "#F8FAFC",
          muted: "#9AA0B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-rajdhani)", "sans-serif"],
      },
      boxShadow: {
        "vice-pink": "0 0 30px -5px rgba(255, 0, 122, 0.45)",
        "vice-cyan": "0 0 30px -5px rgba(0, 240, 255, 0.45)",
        "neon-purple": "0 0 30px -5px rgba(139, 92, 246, 0.45)",
        "neon-clover": "0 0 25px -5px rgba(34, 197, 94, 0.4)",
        "vice-sunset": "0 10px 40px -10px rgba(255, 0, 122, 0.3), 0 0 20px -5px rgba(0, 240, 255, 0.25)",
      },
      backgroundImage: {
        "vice-gradient": "linear-gradient(135deg, #FF007A 0%, #8B5CF6 50%, #00F0FF 100%)",
        "vice-sunset": "linear-gradient(180deg, rgba(255, 0, 122, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)",
        "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 0, 122, 0.05) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(25px)" },
          "100%": { opacity: "0.85", filter: "blur(35px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
