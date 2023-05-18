/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
],
  theme: {
    extend: {
      fontFamily: {
        NeueMontrealRegular : ["NeueMontrealRegular"],
        NeueMontrealBold : ["NeueMontrealBold"]

      }
    },
  },
  plugins: [],
}

