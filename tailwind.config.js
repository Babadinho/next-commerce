/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        moveInNav: {
          '0%': { transform: 'translateY(-5rem)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'nav-slide': 'moveInNav 0.8s ease',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
