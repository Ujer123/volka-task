/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "draw-line": "draw 2s linear infinite",
      },
      colors: {
        'dark-bg': '#0D0D0D',
        'orange-custom': '#FF5500',
      },
keyframes: {
        draw: {
          "0%": { strokeDasharray: "100", strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      }
    },
  },
  plugins: [],
};
