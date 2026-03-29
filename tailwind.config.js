/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slatebase: '#08111f',
        surface: '#0f172a',
        surfaceSoft: '#111c33',
        borderSoft: '#1f3355',
        accent: '#38bdf8',
        accentWarm: '#f59e0b',
        textMain: '#e2e8f0',
        textSoft: '#94a3b8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(56, 189, 248, 0.16)',
        soft: '0 12px 30px rgba(8, 17, 31, 0.28)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
