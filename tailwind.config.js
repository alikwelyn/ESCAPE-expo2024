module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: 'class',
  theme: {
    screens: {
      '3xl': { min: '1601px', max: '2560px' },
      '2xl': { min: '1366px', max: '1600px' },
      xl: { min: '1280px', max: '1365px' },
      lg: { min: '1024px', max: '1279px' },
      md: { min: '768px', max: '1023px' },
      sm: { min: '320px', max: '767px' }
    },
    extend: {
      animation: {
        'infinite-scroll-up': 'infinite-scroll-up 300s linear infinite',
        'infinite-scroll-down': 'infinite-scroll-down 300s linear infinite'
      },
      keyframes: {
        'infinite-scroll-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' }
        },
        'infinite-scroll-down': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(100%)' }
        }
      }
    }
  },
  plugins: []
}
