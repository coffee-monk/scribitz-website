module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#144f5d",
        secondary: "#f1c232",
        secondaryDark: "#d5a853",
        tertiary: "#8D230F",
        video: "#11404a",
        navy: "#011A27",
        softWhite: "#e5d1d1",
        black: "#000000",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
