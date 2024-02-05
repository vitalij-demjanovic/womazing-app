import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true
    },
    colors: {
      primary: '#6E9C9F',
      second: '#509498',
      third: '#F1EADC',
      white: '#fff',
      black: '#000000'
    },
    fontSize: {
      titleXl: ['55px', '60px'],
      titleLg: ['40px', '44px'],
      titleMd: ['25px', '35px'],
      titleSm: ['20px', '28px'],
      textXl: ['20px', '28px'],
      textPrice: ['15px', '21px']
    }
  },
  plugins: []
};
export default config;
