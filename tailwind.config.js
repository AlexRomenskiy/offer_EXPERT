/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Montserrat', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        esbuild: ['ES Build', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        brand: {
          navy: '#020f2d',
          blue: '#175ae8',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
        'brand-gradient-vertical': 'linear-gradient(180deg, #020f2d 0%, #175ae8 100%)',
      },
      borderRadius: {
        'frame': '2.5rem',
        'section': '2rem',
      },
      boxShadow: {
        'deep': '0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.06), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06)',
        'glow-blue': '0 0 30px rgba(23,90,232,0.20), 0 0 80px rgba(23,90,232,0.08)',
      },
    },
  },
  plugins: [],
}
