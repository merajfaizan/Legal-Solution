/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: { firstColor: "#da8e5d", secondColor: "#d98b59" },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
