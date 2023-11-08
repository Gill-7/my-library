module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "335px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      arial: " Helvetica, sans-serif",
    },
    colors: {
      background: "#e4e4e7",
      "sidebar-bg": "#09090b",
      "sidebar-link": "#a1a1aa",
      "sidebar-link-hover": "#d4d4d8",
      "sidebar-link-bg-hover": "#27272a",
      /** BUTTON COLORS **/
      "button-type1-bg": "#fff",
      "button-type1-text": "#fff",
      "button-type2-bg": "#fff",
      "button-type2-text": "#fff",
      "parent-bg": "#f3f4f6",
      // main: "#1c422b",
      // sidebar: "#334155",
      // "sidebar-text": "000",
      "light-main": "#2e6645",
      border: "#bcc3e5",
      black: "#000",
      "light-border": "#d4dafa",
      white: "#fff",
      heading: "rgb(58, 58, 58)",
      "btn-light-orange": "#f06e43",
      "btn-dark-orange": "#ef5927",
      "btn-light-green": "#86d300",
      "dark-blacke": "#1d1f20",
      "light-black": "#6d6c6c",
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
