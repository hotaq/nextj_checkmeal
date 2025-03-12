/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#144552',
        'regal-purple': '#3e1f47',
        'forest-amber': '#D97706',
        'forest-green': '#15803D',
        'forest-emerald': '#064E3B',
        'ancient-dark': '#14532D',
        'vine-green': '#65A30D',
        'animal-brown': '#92400E',
        'deep-teal': '#0b525b',
        'ocean-teal': '#065a60',
        'dark-cyan': '#006466',
        'deep-blue': '#1b3a4b',
        'abyss-dark': '#072227',
        'ancient-gold': '#a17c38',
        'ancient-bronze': '#614e1a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'wood-pattern': "url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMCAwIEMzMCAyMCA3MCA1MCAxMDAgMzAgTDEwMCAxMDAgTDAgMTAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+\")",
        'ancient-pattern': "url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgMCBMMTAgMTAgTDIwIDAgTDMwIDEwIEw0MCAwIEw1MCAxMCBMNDAgMjAgTDUwIDMwIEw0MCA0MCBMNTAgNTAgTDQwIDQwIEwzMCA1MCBMMjAgNDAgTDEwIDUwIEwwIDQwIEwxMCAzMCBMMCAyMCBMMTAgMTAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=\")",
      },
      animation: {
        'leaf-fall': 'leaf-fall 20s linear infinite',
        'forest-pulse': 'forest-pulse 3s ease-in-out infinite',
        'mist-float': 'mist-float 10s ease-in-out infinite',
        'vine-grow': 'vine-grow 8s ease-out forwards',
        'animal-walk': 'animal-walk 12s ease-in-out infinite',
        'butterfly-flutter': 'butterfly-flutter 3s ease-in-out infinite',
      },
      keyframes: {
        'leaf-fall': {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 0.7 },
          '100%': { transform: 'translateY(50px) translateX(10px) rotate(180deg)', opacity: 0.3 },
        },
        'forest-pulse': {
          '0%, 100%': { 
            opacity: 0.7,
            boxShadow: '0 0 5px 2px rgba(6, 90, 96, 0.5)'
          },
          '50%': { 
            opacity: 1,
            boxShadow: '0 0 10px 4px rgba(11, 82, 91, 0.8)'
          },
        },
        'mist-float': {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0.3 },
          '50%': { transform: 'translateY(-10px)', opacity: 0.5 },
        },
        'vine-grow': {
          '0%': { strokeDashoffset: 1000, opacity: 0 },
          '100%': { strokeDashoffset: 0, opacity: 0.8 },
        },
        'animal-walk': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(20px) translateY(-5px)' },
          '50%': { transform: 'translateX(40px)' },
          '75%': { transform: 'translateX(20px) translateY(-5px)' },
        },
        'butterfly-flutter': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
      },
      boxShadow: {
        'forest': '0 0 10px rgba(6, 90, 96, 0.7), 0 0 20px rgba(0, 100, 102, 0.5)',
        'forest-text': '0 0 8px rgba(11, 82, 91, 0.8)',
        'vine': '0 0 3px rgba(27, 58, 75, 0.5)',
        'ancient-glow': '0 0 15px rgba(6, 90, 96, 0.4), 0 0 30px rgba(0, 100, 102, 0.2)',
      },
      fontFamily: {
        'serif': ['Garamond', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'ancient': ['Papyrus', 'Garamond', 'serif'],
      },
    },
  },
  plugins: [],
} 