/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  daisyui: {
    themes: [
      {
        pathfinder: {
          primary: "#6D0000",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
