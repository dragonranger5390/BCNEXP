/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'grad-blueish' : '#24d3c8',
        'grad-greenish' : '#26da43',
        'bg-from-links' : '#0d273a',
        'bg-to-links' : '#0c1830',
        'bg-from-reg' : '#0d273a',
        'bg-to-reg' : '#0c1830',
        'bg-footer' : '#020714',
        'bg-registration' : '#0c0e2b',
        'tmain' : '#a3c0d5',
        'text-main' : '#f3f7ff',
        'tregistration' : '#abc9e0',
        'text-links' : '#f1f5fd',
        'text-footer' : '#576c83',
        'CR-color' : '#d6dae2',
        'bg-links' : '#0c0e2b'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)']
      }
    },
  },
  plugins: [],
}