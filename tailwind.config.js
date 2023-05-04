/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts.tsx}'],
  theme: {
    extend: {
      colors: {
        // mostly from Discord UI
        primary: '#423F71',
        header: '#292841',
        body: '#1C1829',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
