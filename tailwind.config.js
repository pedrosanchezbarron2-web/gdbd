/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'gdbd-orange': '#ff751f',
        'gdbd-cream': '#fff9e1',
        'gdbd-olive': '#2f4f3a',
        'gdbd-border': '#f5efd8'
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}