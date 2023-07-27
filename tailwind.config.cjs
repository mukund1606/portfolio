/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2122",
      },
      backgroundImage: {
        blueGradient: `linear-gradient(114deg, #1D5D9B 0%, #75C2F6 100%)`,
        grayGradient: `linear-gradient(114deg, #919191 0%, #484848 100%)`,
        yellowGradient: `linear-gradient(50deg, #FBEEAC 0%, #F4D160 100%)`,
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        arrow: "arrow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
