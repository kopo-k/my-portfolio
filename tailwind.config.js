/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse-slow 2s infinite',
        'spin-outer': 'rotate-outer 1.5s ease-in-out infinite',
        'spin-inner': 'rotate-inner 1.2s ease-in-out infinite reverse',
        'pulse-inner': 'inner-pulse 1.8s infinite reverse',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.5' },
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          'sans-serif',
        ],
      },
      colors: {
        'taiga-blue': '#3b82f6',
        'taiga-purple': '#8b5cf6',
      }
    },
  },
  plugins: [],
};
