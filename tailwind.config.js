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
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow:
              '0 0 20px 2px rgba(73,210,124,0.4), 0 0 4px rgba(73,210,124,0.1)',
          },
          '50%': {
            boxShadow: '0 0 35px 5px rgba(73,210,124,0.7)',
          },
        },
        /* Idle: tight, subtle neon-green halo — slightly faster blink */
        'idle-halo': {
          '0%, 55%': {
            boxShadow: '0 0 6px 2px rgba(73,210,124,0.18), 0 0 12px 3px rgba(73,210,124,0.08)',
          },
          '60%': {
            boxShadow: '0 0 14px 5px rgba(73,210,124,0.55), 0 0 22px 7px rgba(73,210,124,0.22)',
          },
          '75%': {
            boxShadow: '0 0 14px 5px rgba(73,210,124,0.55), 0 0 22px 7px rgba(73,210,124,0.22)',
          },
          '100%': {
            boxShadow: '0 0 6px 2px rgba(73,210,124,0.18), 0 0 12px 3px rgba(73,210,124,0.08)',
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.8s ease-in-out infinite',
        /* 3.8 s → noticeably faster than the old 5.5 s */
        'idle-halo': 'idle-halo 3.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
