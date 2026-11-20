import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        forro: {
          brown: "hsl(25 60% 20%)",
          rust: "#B84C00",
          orange: "hsl(30 100% 50%)",
          amber: "#FF9500",
          sand: "#FFEEC0",
          beige: "hsl(43 100% 90%)",
          cream: "#FFF8E8",
          yellow: "#FEF7CD",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
} satisfies Config;
