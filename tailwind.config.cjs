/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "to-right": {
          "0%": { transform: "translateX(-600px)" },
        },
        "to-left": {
          "0%": { transform: "translateX(40px)" },
        },
      },
      animation: {
        "fade-in-slow": "fade-in 1s ease-out",
        "slide-right": "to-right 3s ease",
        "slide-left": "to-left 3s ease",
      },
    },
  },
  plugins: [require("daisyui")],
};
