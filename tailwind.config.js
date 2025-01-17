module.exports = {
  purge: ['./src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['night', 'bumblebee'],
    styled: true,
    rtl: false
  }
}
