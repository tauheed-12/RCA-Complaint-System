/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Desktop/Tablet Screen
        'desktop-heading': '24px',
        'desktop-subheading': '18px',
        'desktop-body': '14px',
        'desktop-label': '12px',

        // Phone Screen
        'phone-heading': '18px',
        'phone-subheading': '14px',
        'phone-body': '12px',
        'phone-label': '10px',
      },
      colors: {
        'jmi-green': '#45A967', 
        'jmi-grey':'#E8E9ED',
        'jmi-hovergreen':"#077842",
      },
      fontFamily: {
        'ginto': ['Ginto', 'Arial', 'sans-serif'],
        'ginto-nord': ['Ginto Nord', 'Arial', 'sans-serif'],
        'sans': ['Roboto', 'Arial', 'sans-serif'],

      },
    },
  },
  plugins: [],
}
