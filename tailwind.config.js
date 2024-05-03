/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-100-auto': "100% auto",
        'size-100': "100% 100%",
      },
      colors: {
        primary: "#CAAF8E",
        yellow: "#D1B89E",
        light: "#BABABA"
      },
      fontSize: {
        '12': '12px',
        '16': '16px',
        '20': '20px',
      },
    }
  },
  plugins: [],
}