/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('@tailwindcss/typography')],
  darkMode: ['class'],
  theme: {
    colors: {
      'light-point-color': 'rgb(20 184 166)',
      'dark-point-color': 'rgb(157 23 77)',
      'light-text-color': 'rgb(25, 25, 25)',
      'dark-text-color': 'rgb(226, 225, 225)',
      'light-bg-color': 'rgb(255, 255, 255)',
      'dark-bg-color': 'rgb(0, 0, 0)',
    },
    extend: {
      typography: ({ theme }) => ({}),
    },
  },
};
