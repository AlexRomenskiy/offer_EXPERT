/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'section': '2rem',
      },
      boxShadow: {
        'deep': '0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.06), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06)',
        'glow-amber': '0 0 20px rgba(245,158,11,0.15), 0 0 60px rgba(245,158,11,0.05)',
      },
    },
  },
  plugins: [],
}
