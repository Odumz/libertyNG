/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !==undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`
    }
    return `hsl(var(${variableName}))`
  }
}
export default {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'liberty-purple-100': withOpacity('--color-liberty-purple-100'),
        'liberty-purple-200': withOpacity('--color-liberty-purple-200'),
        'liberty-purple-300': withOpacity('--color-liberty-purple-300'),
        'liberty-purple-400': withOpacity('--color-liberty-purple-400'),
        'liberty-purple-500': withOpacity('--color-liberty-purple-500'),
        'liberty-red-500': withOpacity('--color-liberty-red-500'),
        'liberty-red-600': withOpacity('--color-liberty-red-600'),
        'liberty-grey-100': withOpacity('--color-liberty-grey-100'),
        'liberty-grey-200': withOpacity('--color-liberty-grey-200'),
        'liberty-grey-500': withOpacity('--color-liberty-grey-500'),
        'liberty-grey-800': withOpacity('--color-liberty-grey-800')
      },
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif']
      },
      keyframes: {
        hover: {
          '0%': { transform: 'translateY(0)'},
          '30%': { transform: 'translateY(-20px)'},
          '60%': { transform: 'translateY(0)'},
          '90%': { transform: 'translateY(20px)'},
        },
        hoverIcon: {
          '0%': { transform: 'translateY(0)'},
          '30%': { transform: 'translateY(-2px)'},
          '60%': { transform: 'translateY(0)'},
          '90%': { transform: 'translateY(2px)'},
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        flyIn: {
          '0%': { transform: 'translateY(40px)' },
          '50%': { transform: 'translateY(0)' },
        },
        flyInSide: {
          '0%': { transform: 'translateX(40px)' },
          '50%': { transform: 'translateX(0)' },
        },
        flyOut: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        hover: 'hover 1.5s linear infinite',
        hoverIcon: 'hoverIcon 1s linear infinite',
        wave: 'wave 2s linear infinite',
        flyIn: 'flyIn 0.5s linear',
        flyInSide: 'flyInSide 0.5s linear',
        flyOut: 'flyOut 0.1s linear',
      }
    },
  },
  plugins: [],
}

