import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#60A5FA'
      },
      boxShadow: {
        glow: '0 0 60px rgba(96, 165, 250, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
