/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: " #112546",
      },

      gridTemplateAreas: {
        gallery: [
          "a b c c d d",
          "a b c c g h",
          "e e f f g h",
          "i j k k l l",
          "i j k k n o",
          "m m m m n o",
          "m m m m p p",
        ],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
