/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F4ED',
        gold: '#C8A96A',
        beige: '#EFE7DA',
        dark: '#2A2A2A'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        luxury: '0 10px 40px rgba(0,0,0,0.08)'
      },
      backgroundImage: {
        luxury:
          'linear-gradient(135deg, rgba(248,244,237,1) 0%, rgba(255,255,255,1) 100%)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease forwards'
      },
      keyframes: {
        float: {
          '0%,100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-12px)'
          }
        },
        fadeIn: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      }
    }
  },
  plugins: []
};