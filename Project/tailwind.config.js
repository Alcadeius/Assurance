/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mini: "360px",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
        ubuntu: ["Ubuntu Mono"],
      },
      colors: {
        black: "#111111",
      },
      clipPath: {
        hexagon:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-hexagon": {
          clipPath:
            "polygon(50% 0% , 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        },
      });
    },
  ],
};
