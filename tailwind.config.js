/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.8rem',
      base: '15px',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      orange: '#D87D4A',
      darkGray: '#101010',
      lightGray: '#F1F1F1',
      offWhite: '#FAFAFA',
      lightOrange: '#FBAF85',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        md: '8px',
      },
    },
  },
  plugins: [],
};
