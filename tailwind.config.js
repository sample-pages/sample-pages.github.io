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
};

module.exports = config;
