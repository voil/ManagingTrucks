/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "app.vue",
    "./**/*.{js,vue,ts}",
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
    "../../packages/core/src/components/**/*.{js,vue,ts}",
    "../../packages/modules/src/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#10b981'
        },
      }
    },
  },
  plugins: [],
};
