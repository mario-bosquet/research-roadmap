/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Zen Dots"', 'cursive'],
        sans: ['"Bai Jamjuree"', 'sans-serif'],
      },
      colors: {
        'text-on-dark': '#bdc0d1',
        'text-on-light': '#111426',
        'text-ui': '#e2e5f5',
        accent: '#93ADFF',
        'accent-dark': '#778bca',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow:
              '0 0 20px 2px rgba(147,173,255,0.4), 0 0 4px rgba(147,173,255,0.1)',
          },
          '50%': {
            boxShadow: '0 0 35px 5px rgba(147,173,255,0.7)',
          },
        },
        'idle-halo': {
          '0%, 55%': {
            boxShadow: '0 0 6px 2px rgba(147,173,255,0.18), 0 0 12px 3px rgba(147,173,255,0.08)',
          },
          '60%': {
            boxShadow: '0 0 14px 5px rgba(147,173,255,0.55), 0 0 22px 7px rgba(147,173,255,0.22)',
          },
          '75%': {
            boxShadow: '0 0 14px 5px rgba(147,173,255,0.55), 0 0 22px 7px rgba(147,173,255,0.22)',
          },
          '100%': {
            boxShadow: '0 0 6px 2px rgba(147,173,255,0.18), 0 0 12px 3px rgba(147,173,255,0.08)',
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.8s ease-in-out infinite',
        'idle-halo': 'idle-halo 3.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
