/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-container": "#b6b4b8",
        "inverse-on-surface": "#313032",
        "error": "#ffb4ab",
        "on-background": "#e5e1e4",
        "surface-container-highest": "#353437",
        "on-primary-fixed": "#1a1c1c",
        "outline": "#8b919d",
        "primary": "#c6c6c7",
        "surface-container-low": "#1c1b1d",
        "surface-dim": "#131315",
        "secondary-fixed-dim": "#c8c6c9",
        "surface-tint": "#c6c6c7",
        "primary-fixed-dim": "#c6c6c7",
        "tertiary-fixed-dim": "#fabd34",
        "surface-bright": "#39393b",
        "on-tertiary-container": "#4b3500",
        "background": "#131315",
        "surface-container-lowest": "#0e0e10",
        "secondary-fixed": "#e4e1e5",
        "error-container": "#93000a",
        "primary-fixed": "#e2e2e2",
        "on-tertiary-fixed": "#261900",
        "on-surface": "#e5e1e4",
        "secondary-container": "#47464a",
        "on-error-container": "#ffdad6",
        "on-primary-container": "#373939",
        "on-secondary-fixed-variant": "#47464a",
        "tertiary": "#fabd34",
        "on-error": "#690005",
        "secondary": "#c8c6c9",
        "inverse-primary": "#5d5f5f",
        "on-secondary": "#303033",
        "on-tertiary": "#412d00",
        "surface-variant": "#353437",
        "on-primary": "#2f3131",
        "on-surface-variant": "#c1c7d3",
        "surface-container-high": "#2a2a2c",
        "on-tertiary-fixed-variant": "#5d4200",
        "tertiary-container": "#d19900",
        "primary-container": "#a2a3a3",
        "inverse-surface": "#e5e1e4",
        "surface-container": "#201f22",
        "surface": "#131315",
        "on-secondary-fixed": "#1b1b1e",
        "tertiary-fixed": "#ffdea4",
        "outline-variant": "#414751",
        "on-primary-fixed-variant": "#454747"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "1.5rem",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Geist Mono", "monospace"]
      }
    }
  },
  plugins: [],
}
