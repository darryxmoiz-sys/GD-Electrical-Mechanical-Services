import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Abyss — deep water / engine-room dark. Primary background.
        abyss: {
          DEFAULT: "#0A1F24",
          50: "#E6EBEA",
          100: "#C7D4D3",
          200: "#93AAA9",
          300: "#5E7F7F",
          400: "#375C5E",
          500: "#0A1F24",
          600: "#091B20",
          700: "#07161A",
          800: "#051114",
          900: "#030B0D",
          950: "#020608",
        },
        // Chart Paper — warm, cool-grey paper. Not cream/terracotta default.
        paper: {
          DEFAULT: "#E4E0D2",
          50: "#FBFAF7",
          100: "#F4F2EC",
          200: "#E4E0D2",
          300: "#D2CBB4",
          400: "#B8AE8C",
          500: "#9C9070",
        },
        // Brass — instrument / builder's-plate metal. Primary accent.
        brass: {
          DEFAULT: "#B8894F",
          50: "#F7EFE3",
          100: "#EFDDC1",
          200: "#DEBD8D",
          300: "#CDA268",
          400: "#B8894F",
          500: "#93693A",
          600: "#6E4E2B",
        },
        // Verdigris — oxidised copper patina. Secondary accent, links.
        verdigris: {
          DEFAULT: "#4F7C74",
          50: "#E8F0EE",
          100: "#C7DDD8",
          200: "#9BC1B8",
          300: "#6FA599",
          400: "#4F7C74",
          500: "#3B5F59",
          600: "#2A4642",
        },
        // Safety Orange — foul-weather gear / hazard marking. CTAs only.
        safety: {
          DEFAULT: "#D2601A",
          50: "#FBEBDF",
          100: "#F5CDAC",
          200: "#EBA36A",
          300: "#DE7C39",
          400: "#D2601A",
          500: "#A44A14",
          600: "#78370F",
        },
        // Steel — plate grey. Borders, muted text.
        steel: {
          DEFAULT: "#6B7580",
          50: "#F1F2F3",
          100: "#DBDEE1",
          200: "#B7BDC4",
          300: "#939CA6",
          400: "#6B7580",
          500: "#535A63",
          600: "#3D4249",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grain": "url('/images/grain.svg')",
      },
      boxShadow: {
        plate: "0 1px 0 rgba(228,224,210,0.06) inset, 0 20px 40px -20px rgba(2,6,8,0.7)",
      },
      borderRadius: {
        plate: "3px",
      },
      keyframes: {
        sweep: {
          "0%": { transform: "rotate(-120deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        sweep: "sweep 0.9s cubic-bezier(0.2,0.7,0.3,1) forwards",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
