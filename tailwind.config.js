module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mel1':'#011f2c'
      },

      spacing: {
        '88': '22rem',
        '100': '25rem',
        '480': '120rem',
        '350': '87.5rem',
      }
      
    },
  },
  plugins: [],
}
