/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '350px',
      // => @media (min-width: 3500px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1400px',
      // => @media (min-width: 1400px) { ... }

      'xl': '1680px',
      // => @media (min-width: 1680px) { ... }

      '2xl': '1900px',
      // => @media (min-width: 1900px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
