import type { Config } from 'tailwindcss'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      blue: '#6357b1',
      purple: {
        light: '#DCD9F5',
        DEFAULT: '#A098D3',
        dark: '#6357b1'
      },
      green: '#25ff90',
      gray: {
        light: '#f6f6f6',
        DEFAULT: '#ebebeb',
        dark: '#4b4b4b'
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('tailwindcss-animated')],
} satisfies Config

