import type { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors,
    extend: {
      screens: {
        xxs: '380px',
        xxl: '1440px'
      }
    }
  },
  plugins: []
} satisfies Config
