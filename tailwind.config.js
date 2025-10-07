/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        scrollUp: "scrollUp 15s linear infinite",
      },
    },
  },
  plugins: [],
};
