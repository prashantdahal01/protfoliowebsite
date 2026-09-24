import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212"
      },
      fontFamily: {
        sans: ["Avenir Next", "Helvetica Neue", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;

