/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Press Start 2P', 'monospace'],
      },
      colors: {
        'neon-pink': '#ff6b6b',
        'neon-teal': '#4ecdc4',
        'neon-blue': '#45b7d1',
        'neon-green': '#96ceb4',
      },
      animation: {
        'gradient-shift': 'gradientShift 4s ease infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}