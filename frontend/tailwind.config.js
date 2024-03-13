/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        page_center: "80%",
      },
      colors: {
        redlee: "#E0303A",
        background: "#F4F4F4",
        footer: "#57423F",
      },
      fontSize: {
        banner: "clamp(3rem, 5vw, 3.75rem)",
        header: "clamp(1.8rem, 5vw, 2.25rem)",
        navFont: "clamp(1rem, 5vw, 1.125rem)",
        basefont: "clamp(1rem, 5vw, 1.25rem)",
      },
      gridTemplateColumns: {
        "3.5": "span 3.5",
      },
    },
  },
  plugins: [],
};
