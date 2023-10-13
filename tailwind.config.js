/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.vue", "./src/**/*.ts"],
  important: true,
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /text-(2|3|4|5|6|7|8|9)xl/,
    },
  ],
};
