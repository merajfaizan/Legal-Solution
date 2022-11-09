/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        480: "30rem",
        512: "32rem",
        560: "35rem",
      },
    },
    colors: { firstColor: "#da8e5d", secondColor: "#d98b59" },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
