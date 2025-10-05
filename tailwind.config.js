/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro, html}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,astro}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = config;

