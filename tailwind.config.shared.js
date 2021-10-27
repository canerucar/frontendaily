const colors = {
  black: {
    DEFAULT: '#000000',
    120: '#191E45',
    130: '#1E2641',
  },
  white: {
    DEFAULT: '#ffffff',
    120: '#F1F2FC',
  },
  blue: {
    120: '#40476d',
    130: '#F4F7FD',
    140: '#6E6BFF',
    150: '#E9E9FF',
    160: '#4594C4',
    170: '#3A456A',
  },
  orange: {
    120: '#eb6534',
    130: '#E49852',
  },
  red: {
    120: '#AD658E',
  },
  gray: {
    120: '#464A67',
    130: '#F2F3FB',
    140: '#9DA2AE',
  },
  green: {
    120: '#639B1B',
  },
  transparent: {
    100: 'rgba(255, 255, 255, 0.6)',
  }
};

const screens = {
  '2xs': '374px',
  '1xs': '414px',
  xs: '575px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1170px',
  '2xl': '1440px',
};

module.exports = { colors, screens };
