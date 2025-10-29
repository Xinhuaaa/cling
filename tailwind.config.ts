import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f1014',
        foreground: '#f8f9fb',
        accent: '#3182ce'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 20px 60px -30px rgba(15, 16, 20, 0.8)'
      }
    }
  },
  plugins: []
};

export default config;
