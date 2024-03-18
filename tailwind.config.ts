import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '12px',
      normal: '16px',
      md: '20px',
      big: '25px',
      lg: '31px',
      xl: '38px',
      xxl: '48px',
      xxxl: '61px'
    },
    colors: {
      white: "#FFFFFF",
      black: '#000000',
      foundation: "#E9EFF4",
      blue: "#0072CE",
      gray: "#A4A7BC",
      lightGray: "#D4CECE",
      darkGray: "#8D8D8D",
      darkBlue: "#001E36",
      error: "#E60000",
      text: "#5A5454",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
