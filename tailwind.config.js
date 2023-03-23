/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     'logoSun':"#f04e23",
     'logoRay':"#f26522",
     'logoBlue':"#2e3192",
     'logoTag':"#ed1c24",
     'cyan': {
         100: "#ccffff",
         200: "#99ffff",
         300: "#66ffff",
         400: "#33ffff",
         500: "#00ffff",
         600: "#00cccc",
         700: "#009999",
         800: "#006666",
         900: "#003333"
},
    },
    extend: {
      spacing: {
        '17': '70px',
      },
      transitionDuration: {
        '0': '0ms',
        '4000': '4000ms',
      }
    },
  },
  plugins: [require("daisyui")],
}
