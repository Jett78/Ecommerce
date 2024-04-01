/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
  theme: {
    extend: {},
  },
  plugins: [],
}