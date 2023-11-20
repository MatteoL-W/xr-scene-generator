/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-jean': '#1F416F',
        jean: '#355581',
        coalblue: '#5C96C4',
        greysky: '#9DB2BF',
      },
    },
  },
  plugins: [],
}
