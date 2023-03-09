/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: 'rgb(241 245 249)',
        tertiary: '#F7FBFD',
        accent: '#000000ff',
      },
      textColor: {
        primary: '#363848',
        secondary: 'rgb(241, 245, 249)',
        accent: '#00000000ff',
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
