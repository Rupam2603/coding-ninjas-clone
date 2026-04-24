/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cn: {
          dark:    "#1a1d23",
          darker:  "#13151a",
          card:    "#22252d",
          orange:  "#f66c3b",
          "orange-hover": "#e55a2b",
          "orange-light": "#fff4ef",
          mint:    "#6ee7b7",
          gray:    "#a1a5b0",
          border:  "#2d3039",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-right": {
          "0%":   { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "count-up": {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up":  "fade-in-up 0.6s ease-out both",
        "fade-in":     "fade-in 0.5s ease-out both",
        "slide-right": "slide-right 0.4s ease-out both",
        marquee:       "marquee 30s linear infinite",
        "count-up":    "count-up 0.4s ease-out both",
        float:         "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};