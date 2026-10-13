/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06101E',
          900: '#0B1F3A',
          850: '#0E2646',
          800: '#132F55',
          700: '#1B3F70',
          600: '#265494',
          500: '#346EB8',
          100: '#E2EAF4',
          50: '#F0F5FA',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F8F1E1',
          200: '#F0E0BF',
          300: '#E5C992',
          400: '#D8AF62',
          500: '#C9A24B',
          600: '#A98334',
          700: '#7F6224',
          800: '#5A4518',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(201, 162, 75, 0.3)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'glow-navy': '0 10px 30px -10px rgba(11, 31, 58, 0.5)',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 35s linear infinite',
      },
    },
  },
  plugins: [],
}
