/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-grid": "url('/src/assets/grid.png')",
        "login-bg": "url('/src/assets/login_bg.png')",
      },
      backgroundColor: {
        "default-green": "#26A16C",
        "hover-green": "#71bc8f",
        "button-green": "#63b994",
      },
    },
  },
  plugins: [],
};
