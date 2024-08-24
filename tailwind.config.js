/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "text-6xl": "3.4375rem",
        "text-sm": "15px",
      },
      textColor: {
        "text-slate-950": "#1D2130",
        "text-slate-500": "#43495B",
      },
      backgroundColor: {
        "bg-black": "#1B2431",
        "bg-slate-300": "#9BFFA5",
      },
      padding: {
        "p-16": "0 4.375rem",
      },
      height:{
        "h-80":"325px"
      }
    },
  },
  plugins: [
  ],
};
