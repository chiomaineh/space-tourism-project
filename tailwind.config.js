/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px", // mobile → small tablets
      md: "768px", // tablets
      lg: "1024px", // laptops & wide tablets (Nest Hub, iPad Pro)
      xl: "1280px", // desktops
      "2xl": "1536px", // large desktops
    },
    extend: {
      colors: {
        mobileNav: "#0B0D1726",
      },

      fontFamily: {
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
        belleFair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
