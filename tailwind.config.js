module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      cream: '#f5f3ef',
      sage: '#8e9f83',
      earth: '#9f9485',
      'deep-sea-blue': '#658589',
      steele: '#95999A',
    },
    extend: {
      fontFamily: {
        brittany: ['Brittany', 'cursive'],
        code: ['Code', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
