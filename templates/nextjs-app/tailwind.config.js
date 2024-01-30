/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002E6D',
        secondary: '#009BDE',
        accent: '#EE7523',
        'accent-success': '#54BBAB',
        'app-red': '#BD3328',
        'app-gray': {
          100: '#ECEEEF',
          200: '#DEDEDE',
          300: '#EFEFEF',
          700: '#C1C1C1',
          800: '#9B9B9B',
          900: '#555555'
        },
        blue: {
          10: '#F7FBFE'
        }
      }
    }
  },
  plugins: []
}
