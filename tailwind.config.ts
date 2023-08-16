import type { Config } from 'tailwindcss'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      blue: '#6357b1',
      purple: '#6357b1',
      green: '#25ff90',
      'gray-dark': '#4b4b4b',
      gray: '#787878',
      'gray-light': '#f6f6f6',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config

