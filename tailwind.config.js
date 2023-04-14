export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Roboto"',
          '"Segoe UI"',
          '"Helvetica Neue"',
          '"Noto Sans"',
          'sans-serif'
        ]
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}
