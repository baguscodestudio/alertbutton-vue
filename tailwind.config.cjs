/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-05': '#FDF3E1',
        'orange-30': '#F7BA50',
        'orange-40': '#F5AB2B',
        'orange-80': '#DC5A00',
        'orange-90': '#C75100',
        'red-0': '#FEF5F5',
        'red-80': '#CC3123',
        'coolgrey-100': '#0C0D0D',
        'blue-60': '#2C75DD',
        'blue-0': '#F4FAFF',
        'green-0': '#F8FFF2',
        'green-80': '#008700',
      },
    },
  },
  plugins: [],
};
