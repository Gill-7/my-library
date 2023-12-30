const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "335px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    colors: {
      // SIDEBAR COLORS
      "sidebar-bg": "#020617",
      "sidebar-link": "#cbd5e1",
      "sidebar-link-hover": "#e2e8f0",
      "sidebar-link-bg-hover": "#0284c7",
      // LEFT INPUT SECTION COLORS
      background: "#fff",
      "input-main-color": "#94a3b8",
      "input-text-color": "#475569",
      "border-bottom": "#cbd5e1",
      overlay: "#f1f5f9",
      "overlay-text": "#020617",
      // FORM INPUTS
      "input-border": "#94a3b8",
      "input-border-hover": "#334155",
      "input-label": "#1e293b",
      "text-color": "#475569",
      "text-white": "fff",
      //FORM BUTTON
      "button-bg": "#2563eb",
      "button-text": "#fff",
      "button-bg-hover": "#1e40af",
      testing: "#ea580c",
    },
    extend: {
      boxShadow: {
        "3xl":
          "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px, rgba(255, 255, 255, 0.15) 0px 0px 4px 3px",
      },
    },
  },
  plugins: [],
};
