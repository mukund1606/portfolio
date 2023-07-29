/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2122",
        blueGradient: `linear-gradient(114deg, #1D5D9B 0%, #75C2F6 100%)`,
      },
      backgroundImage: {
        blueGradient: `linear-gradient(114deg, #1D5D9B 0%, #75C2F6 100%)`,
        grayGradient: `linear-gradient(114deg, #919191 0%, #484848 100%)`,
        yellowGradient: `linear-gradient(50deg, #FBEEAC 0%, #F4D160 100%)`,
        circleStar: 'url("/circle-star.svg")',
      },
      fontFamily: {
        sans: ["Port Lligat Slab", "sans-serif"],
      },
      animation: {
        arrow: "arrow 2s ease-in-out infinite",
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
