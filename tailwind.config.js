/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-color': 'radial-gradient(#ddd 1px, transparent 1px), radial-gradient(#ddd 1px, transparent 1px)',
      },
      backgroundPosition: {
        '0': '0 0, 25px 25px',
      },
      backgroundAttachment: {
        'fixed': 'fixed',
      },
      backgroundSize: {
        '50px': '50px 50px',
      },
    },
  },
  plugins: [],
}
