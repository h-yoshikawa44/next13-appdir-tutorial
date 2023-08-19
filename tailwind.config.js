/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 指定したファイルのみにtailwindcssが適用されるようにする
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
