/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        'primary': 'hsl(38, 61%, 73%)',
        'secondary': 'hsl(38, 61%, 55%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px 1px hsl(38, 61%, 73%)',
      },
      animation: {
        'shadow-pulse': 'shadowPulse 700ms ease-in-out alternate infinite'
      },
      keyframes: {
        shadowPulse: {
          '0%': { boxShadow: '0 0 30px 1px hsl(38, 61%, 73%)' },
          '100%': { boxShadow: '0 0 20px 0.5px hsl(38, 61%, 73%)' }
        }
      }
    },
  },
  plugins: [],
}
