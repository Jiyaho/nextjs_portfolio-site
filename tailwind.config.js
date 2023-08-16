/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('@tailwindcss/typography')],
  darkMode: ['class'],
  theme: {
    extend: {
      typography: ({ theme }) => ({}),
    },
  },
};
