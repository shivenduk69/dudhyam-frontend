/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#00345B',
          dark: '#002642',
          light: '#00477a',
          50: '#eef4f9',
          100: '#d9e7f2',
          200: '#b3d0e5',
          800: '#002540',
          900: '#00345B',
        },
        green: {
          DEFAULT: '#438B25',
          dark: '#356e1d',
          light: '#52a82e',
          50: '#eef6eb',
          100: '#d7eed0',
          600: '#438B25',
          700: '#356e1d',
        },
        gold: {
          DEFAULT: '#FFC928',
          dark: '#e6b219',
          light: '#ffd452',
          50: '#fffdf4',
          100: '#fff7d6',
          500: '#FFC928',
          600: '#e6b219',
        },
        cream: {
          DEFAULT: '#FFFCF2',
          dark: '#f3eedf',
          light: '#ffffff',
          50: '#FFFCF2',
          100: '#f7f4ea',
          200: '#ece5d4',
        },
        brown: {
          DEFAULT: '#A65A20',
          dark: '#854617',
          light: '#c46b28',
          50: '#fbf5ef',
          100: '#f4e5d8',
          700: '#A65A20',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
