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
        background: "#F4F4F4"
      },
      fontSize: {
        header: "clamp(3rem, 5vw, 3.75rem)",
        navFont: "clamp(1rem, 5vw, 1.125rem)",
        basefont: "clamp(1rem, 5vw, 1.25rem)"
      }
    },
  },
  plugins: [],
};
