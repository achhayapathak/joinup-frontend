export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chillax: ["Chillax", "sans-serif"],
      },
      colors: {
        conference: "#72c3ff",
        hackathon: "#d8a8ff",
        "co-working": "#8cf3a9",
        workshop: "#ff7e9c",
        "meet-ups": "#ffb08f",
        primary: "#09d3cd",
        disabled: "#7c7c7c",
        error: "#d90000",
        "primary-light": "#09d3cd",
      },
    },
  },
  plugins: [],
};
