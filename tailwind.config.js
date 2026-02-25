/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        silver: '#F2F5F7',
        sky: '#3BA3FA',
        aqua: '#5AF3E6'
      }
    }
  },
  plugins: []
};
