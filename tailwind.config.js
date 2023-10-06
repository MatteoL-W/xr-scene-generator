/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jean: '#27374D',
        coalblue: '#526D82',
        greysky: '#9DB2BF',
      },
    },
  },
  plugins: [],
}
