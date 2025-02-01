/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pest-green': '#34D399',
        'pest-blue': '#3B82F6',
        'pest-dark': '#1F2937',
      },
    },
  },
  plugins: [],
}