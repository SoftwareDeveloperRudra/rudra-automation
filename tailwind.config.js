/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070A11",
        card: "#0D131F",
        "card-hover": "#131C2E",
        border: "rgba(255, 255, 255, 0.08)",
        brand: {
          green: "#00E676",
          "green-hover": "#00C853",
          emerald: "#10B981",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          dark: "#070A11",
          card: "#0D131F",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        "emerald-glow": "0 10px 40px -10px rgba(0, 230, 118, 0.3)",
        "blue-glow": "0 10px 40px -10px rgba(59, 130, 246, 0.3)",
        "card-glow": "0 20px 50px -15px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
