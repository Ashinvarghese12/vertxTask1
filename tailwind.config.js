/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xlg': '1050px',
        'xsm': '830px',
        'msx': '550px',
        'smx': '500px',
        'xmx': '475px',
        'xxs': '375px',
        'xsx': '345px'
      },
    },
  },
  plugins: [],
}

