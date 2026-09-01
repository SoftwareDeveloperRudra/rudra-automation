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
        background: "#04060A",
        card: "#0A0E17",
        "card-hover": "#101625",
        border: "rgba(255, 0, 85, 0.15)",
        "border-hover": "rgba(0, 255, 102, 0.3)",
        cyber: {
          red: "#FF0055",
          "red-bright": "#FF2A6D",
          green: "#00FF66",
          "green-bright": "#39FF14",
          dark: "#04060A",
          card: "#090D16",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        "neon-red": "0 0 25px rgba(255, 0, 85, 0.4)",
        "neon-green": "0 0 25px rgba(0, 255, 102, 0.4)",
        "neon-dual": "0 0 30px rgba(255, 0, 85, 0.3), 0 0 30px rgba(0, 255, 102, 0.3)",
      },
    },
  },
  plugins: [],
};
