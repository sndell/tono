/** @type {import('tailwindcss').Config} */
module.exports = {
  type: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    height: {
      screen: `calc(var(--vh) * 100)`,
    },
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#F2F4F5",
        tertiary: "#F7FBFD",
        accent: "#000000ff",
        google: "#4285F4",
      },
      textColor: {
        primary: "#363848",
        secondary: "rgb(241, 245, 249)",
        accent: "#00000000ff",
      },
      fontFamily: {
        sourcesanspro: '"Source Sans Pro", sans-serif',
      },
      gridTemplateColumns: {
        main: `minmax(auto, 1200px)`,
        nav: `1fr max-content 1fr`,
      },
    },
  },
  plugins: [],
};
