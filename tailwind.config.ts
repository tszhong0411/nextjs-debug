// import { type Config } from 'tailwindcss'

// const config: Config = {
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        special: "#ff0000",
      },
    },
  },
  plugins: [],
};

export default config;
  