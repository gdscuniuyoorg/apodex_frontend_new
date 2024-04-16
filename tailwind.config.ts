import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // fontSize: {
      //   sm: "12px",
      //   normal: "16px",
      //   md: "20px",
      //   big: "25px",
      //   lg: "31px",
      //   xl: "38px",
      //   xxl: "48px",
      //   xxxl: "61px",
      // },
      fontFamily: {
      },

      colors: {
        white: '#FFFFFF',
        black: '#000000',
        foundation: '#E9EFF4',
        blue: '#0072CE',
        gray: '#A4A7BC',
        lightGray: '#D4CECE',
        darkGray: '#8D8D8D',
        // darkBlue: '#001E36',
        error: '#E60000',
        text: '#5A5454',
        brand: '#0070CC',
        lightBlue: {
          100: '#EAEEFA',
          200: '#D4DDF4',
          300: '#BECDEF',
          400: '#A8BCE9',
          500: '#91ACE4',
          600: '#7A9DDE',
          700: '#608DD8',
          800: '#407FD2'
        },
        darkBlue: {
          100: '#0D111A',
          200: '#131C2D',
          300: '#172741',
          400: '#1A3256',
          500: '#1B3E6C',
          600: '#1A4A83',
          700: '#17569B',
          800: '#17569B'
        },
        neutral: {
          white: '#E0E0E1',
          200: '#C2C2C4',
          300: '#A5A5A8',
          400: '#88898C',
          500: '#6D6E72',
          600: '#535458',
          700: '#3A3B40',
          800: '#232429',
          black: '#0B0D14'
        }
      }
    }
  },
  plugins: []
};
export default config;
