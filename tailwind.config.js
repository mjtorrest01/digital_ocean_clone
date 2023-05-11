/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    container: {
      padding: 'a.4rem',
    },
    extend: {
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'cascadia': '"CascadiaCode"',
      },
      colors: {
        'do-blue-dark': '#081b4b',
        'do-blue-medium': '#002c9b',
        'do-blue-light': '#0069ff',
      },
      boxShadow: {
        'input': '0 5px 1px 0 rgb(0, 0, 0, 0.1)',
        'input-focus': '0 2px 1px 0 rgb(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

