/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1120px",
        },
      },
      backgroundImage: {
        bannarImage: "/src/assets/images/first.webp",
      },
    },
  },
  plugins: [],
};
