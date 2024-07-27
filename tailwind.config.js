/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: "rgba(29, 24, 37, 1)",
      },
    },
  },
  plugins: [],
};

