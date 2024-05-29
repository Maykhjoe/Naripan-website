/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'vintage-cream': '#F1E5D1',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

