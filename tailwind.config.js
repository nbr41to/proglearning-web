/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: 'Baloo',
        firaCode: 'FiraCode VariableFont',
      },
      colors: {
        primary: '#10E8CF',
        secondary: '#56C0FE',
      },
    },
    screens: {
      sp: { max: '640px' },
      // => @media (max-width: 640px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    aria: {
      expanded: 'expanded="true"',
      unexpanded: 'expanded="false"',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false, // TailWindCSSのResetCSSとMantineの競合を防ぐために無効化
  },
};
