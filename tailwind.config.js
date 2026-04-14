/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#080B14",
        card: "#0D1220",
        "card-hover": "#111827",
        border: "#1E2A3A",
        accent: {
          blue: "#3B82F6",
          indigo: "#6366F1",
          purple: "#8B5CF6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
