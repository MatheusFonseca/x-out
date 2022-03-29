module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      blue: '#6C91BF',
      'blue-dark': '#3A5F8D',
      green: '#00A878',
      'green-dark': '#007646',
      yellow: '#F3B139',
      'yellow-dark': '#C17F07',
      red: '#DD614A',
      'red-dark': '#AB2F18',
      white: '#EEEEEE',
      gray: '#1F3540',
      'gray-dark': '#192A32',
      'gray-light': '#BCBCBC',
    },
    boxShadow: {
      md: '0px 8px 2px rgba(0, 0, 0, 0.25)',
      lg: '0px 16px 2px rgba(0, 0, 0, 0.25)',
    },
    extend: {},
  },
  plugins: [],
};
