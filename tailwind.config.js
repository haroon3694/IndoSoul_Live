/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ['bebas-neue-by-fontfabric, san-serif'],
      },
      colors: {
        liveRed: '(--liveRed)',
        soulGreen: '(--soulGreen)',
        rootsBrown: '(--rootsBrown)',
        musicBlue: '(--musicBlue)',
        flowGreen: '(--flowGreen)',
        indoWhite: '(--white)',
        aboutUsRed: '#F44007',
      },
      gradientColorStops: {
        soulGradient: 'bg-gradient-to-r from-[#96d312] to-[#e92f2f]',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}

