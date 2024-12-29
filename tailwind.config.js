/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6200ea", // Deep purple
        "primary-content": "#ffffff", // White
        secondary: "#ffab00", // Amber
        "secondary-content": "#000000", // Black
        accent: "#00c853", // Green
        "accent-content": "#000000", // Black
        neutral: "#212121", // Very dark gray
        "neutral-content": "#ffffff", // White
        "base-100": "#121212", // Dark gray (same as current body background)
        "base-200": "#1a1a1a", // Slightly lighter dark gray (current button background)
        "base-300": "#333333", // Even lighter dark gray (current sidebar button background)
        "base-content": "#ffffff", // White
        info: "#00b0ff", // Light blue
        success: "#00c853", // Green (same as accent)
        warning: "#ffab00", // Amber (same as secondary)
        error: "#f44336", // Red
      },
    },
  },
  plugins: [],
};
