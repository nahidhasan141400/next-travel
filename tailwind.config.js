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
     'logoTag':"#ed1c24"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
