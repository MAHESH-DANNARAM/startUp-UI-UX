/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        15: ['15px', { lineHeight: '32px' }]
      },
      
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      width: {
        6.5: '22px'
      },
      height: {
        6.5: '22px'
      },
      outlineWidth: {
        1.5: '1.5px'
      },
      colors: {
        main: {
          100: '#EBEBEB',
          200: '#EAEAEA',
          300: '#94A1A0',
          400: '#7F8C8D',
          500: '#455358',
          DEFAULT: '#38454A',
          600: '#3F474F',
          700: '#1e2122'
        },
        alt: {
          dark: '#0868b1',
          DEFAULT: '#0984E3'
        },
        altTwo: {
          dark: '#9f5252',
          DEFAULT: '#C66565'
        },
        altThree: {
          light: '#9BEAD4',
          dark: '#002C23'
        },
        altFour: {
          dark: '#d0d4d5',
          DEFAULT: '#ECF0F1'
        }
      }
    },
  },
  plugins: [],
}