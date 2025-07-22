/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
                'JetBrain': ['JetBrains Mono', 'sans-serif'], // Replace with your font name
              },
    },
  },
  plugins: [],
}

