/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pf: '#fafafa',
        pfDarkBlue: '#203a4c',
        blackBlue: '#33323d',
        pfGreen: '#5fb4a2',
        pfLightGrey: '#fafafa',
        pfBgBlack: 'rgba(0, 0, 0, 0.5)',
        pfBgLightGrey: '#fafafa',
        pfLightGrey2: '#eaeaeb',
        pfRed: '#f43030',
      },
      fontFamily: {
        IbarraReal: 'Ibarra Real Nova',
        PublicSans: 'Public Sans',
      },
      backgroundImage: {
        topImage: "url('./src/assets/images/image-homepage-hero@2x.jpg')",
      },
      boxShadow: {
        '1l': '0 5px 15px rgb(0 0 0 / 10%)',
        '2l': '0 5px 15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
