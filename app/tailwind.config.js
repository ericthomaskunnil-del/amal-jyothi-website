/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#00205B',
        'primary-crimson': '#A51C30',
        'accent-gold': '#C4961A',
        'bg-white': '#FFFFFF',
        'bg-light': '#F8F9FA',
        'bg-dark': '#1F2937',
        'text-main': '#1F2937',
        'text-muted': '#6B7280',
        'text-light': '#F9FAFB',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'blob': 'blob 12s ease-in-out infinite',
        'blob-slow': 'blob 18s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
    },
  },
  plugins: [],
}
