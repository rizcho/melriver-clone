module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },

      colors: {
        'mel1':'#011f2c'
      },

      spacing: {
        '88': '22rem',
        '100': '25rem',
        '480': '120rem',
        '350': '87.5rem',
        '400': '100rem',
        '450': '112.5rem',
        '500': '125rem',
      }
      
    },
  },
  plugins: [],
}
