const { colors, screens } = require('./tailwind.config.shared');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      screens
    },
    theme: {}
  },
  variants: {
  },
  plugins: [],
};
