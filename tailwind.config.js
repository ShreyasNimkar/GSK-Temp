/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        gif: 'url("/public/sparkles.gif")',
      }),
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
