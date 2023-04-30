/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        verydarkgray: "hsl(0, 0%, 17%)",
        darkgray: "hsl(0, 0%, 59%)",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      backgroundImage: {
        mobile: "url('./src/assets/images/pattern-bg-mobile.png')",
        desktop: "url('./src/assets/images/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
