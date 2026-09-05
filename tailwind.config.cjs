/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a855f7',
        'primary-dark': '#9333ea',
        'primary-light': '#c4b5fd',
        background: '#0f172a',
        'background-light': '#1e293b',
        'background-dark': '#020617',
        card: 'rgba(255, 255, 255, 0.05)',
        'card-hover': 'rgba(255, 255, 255, 0.08)',
        border: 'rgba(255, 255, 255, 0.1)',
        'border-hover': 'rgba(255, 255, 255, 0.2)',
        text: '#f8fafc',
        'text-muted': '#94a3b8'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(31, 38, 135, 0.5)'
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}