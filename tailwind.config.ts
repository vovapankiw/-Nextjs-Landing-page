import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'black-50': '#808080',
        'black-60': '#666666',
        'black-80': '#333333',
        primary: '#D1964C',
        secondary: '#5C594D',
        khaki: '#332F21',
        'khaki-60': '#85827a',
        'khaki-80': '#5c594d',
        stepovyi: '#edebde',
        'stepovyi-70': '#f2f1e8',
        white: '#ffffff',
        'white-50': '#999790',
        'white-60': '#adaca6',
        'white-80': '#d6d5d3',
        'white-20': '#fbfbf8',
        yellow: '#F9D849',
        'navy-blue': '#123A69',
        'grass-green': '#0F6647',
        sand: '#EFDBB2',
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        xs: '0.6875rem', // 11px
        sm: '0.8125rem', // 13px
        base: '0.9375rem', // 15px
        lg: '1.175rem', // 18px
        xl: '1.375rem', // 22px
        '2xl': '1.75rem', // 28px
        '3xl': '2.375rem', // 38px
        black: '#000000',
        'black-50': '#808080',
        'black-60': '#666666',
        'black-80': '#333333',
        secondary: '#5C594D',
        khaki: '#332F21',
        'khaki-60': '#85827a',
        'khaki-80': '#5c594d',
        stepovyi: '#edebde',
        'stepovyi-70': '#f2f1e8',
        white: '#ffffff',
        'white-50': '#999790',
        'white-60': '#adaca6',
        'white-80': '#d6d5d3',
        'white-20': '#fbfbf8',
        yellow: '#F9D849',
        'navy-blue': '#123A69',
        'grass-green': '#0F6647',
        sand: '#EFDBB2',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      boxShadow: {
        header: '0px 2px 4px 0px rgba(37, 27, 17, 0.15);',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
