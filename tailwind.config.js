/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-opensans)"],
      },
      backgroundImage: {
        "background-swirl": "url('/img/background-swirl.png')",
        "gradient-filter":
          "linear-gradient(90deg, #050B10 19.49%, #17507E 100%), ",
      },
      backgroundSize: {
        200: "200%, 200%",
      },
      colors: {
        text: "#E6E6E6",
        background: "#001B32",
        primary: "#63CAF2",
        "primary-dark": "#2FA2D0",
        "primary-light": "#93F3F6",
        secondary: "#030303",
        accent: "#FF4000",
        "accent-light": "#FF9429",
        warning: "#C20505",
        success: "#6CB350",
      },
    },
  },
  plugins: [],
};
