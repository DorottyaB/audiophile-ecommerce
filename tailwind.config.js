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
      sm: '0.815rem',
      base: '15px',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
    },
    colors: {
      orange: '#D87D4A',
      darkGray: '#101010',
      gray: '#101010b3',
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
      backgroundImage: {
        'hero-image-sm':
          "url('https://res.cloudinary.com/dcigubvxn/image/upload/v1680198063/audiophile/home/mobile/image-header_lshoqz.jpg')",
        'hero-image-md':
          "url('https://res.cloudinary.com/dcigubvxn/image/upload/v1680198064/audiophile/home/tablet/image-header_ldh984.jpg')",
        'hero-image-lg':
          "url('https://res.cloudinary.com/dcigubvxn/image/upload/v1680198062/audiophile/home/desktop/image-hero_qvyzuf.jpg')",
      },
      letterSpacing: {
        lg: '0.4em',
        xl: '0.6em',
      },
      margin: {
        lg: '88px',
        xl: '120px',
        '2xl': '160px',
      },
      gap: {
        xl: '125px',
      },
    },
  },
  plugins: [],
};
