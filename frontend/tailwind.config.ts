import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        success: '#00C853',
        error: '#D50000',
        warning: '#FFAB00',
        info: '#2962FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^w-/ 
    },
    {
      pattern: /^h-/
    },
    {
      pattern: /^rounded-/
    },
    {
        pattern: /^success/
    },
    {
        pattern: /^error/
    },
    {
        pattern: /^warning/
    },
    {
      pattern: /^info/
    }
  ]
}
export default config
