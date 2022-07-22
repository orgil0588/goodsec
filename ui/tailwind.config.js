module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {

      'sm': '640px',

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    
    },
    extend: {
      colors: {
        "primary-black": "#23262F",
        "primary-gray": "#777E90",
        "primary-blue": "#ef4444",
        "primary-red": "#FF6838",
        "primary-green": "#58BD7D",
        "secondary-gray": "#B1B5C3",
      },
    },
  },
  plugins: [],
}
