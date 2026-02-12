import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#60A5FA'
      },
      boxShadow: {
        soft: '0 10px 35px rgba(96, 165, 250, 0.22)'
      },
      backgroundImage: {
        'grid-blue': 'linear-gradient(to right, rgba(96,165,250,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.15) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
