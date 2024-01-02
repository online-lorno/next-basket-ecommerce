import withMT from '@material-tailwind/react/utils/withMT'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-montserrat)', 'sans-serif'],
    },
    backgroundImage: {
      'home-hero-image-1': 'url("/images/home-hero-image-1.jpeg")',
      'home-hero-image-2': 'url("/images/home-hero-image-2.jpeg")',
      'home-hero-image-3': 'url("/images/home-hero-image-3.jpeg")',
      'home-hero-image-4': 'url("/images/home-hero-image-4.jpeg")',
    },
    extend: {
      screens: {
        '3xl': '1440px',
      },
      colors: {
        main: '#252B42',
        primary: '#23A6F0',
        secondary: {
          green: '#23856D',
          yellow: '#F3CD03',
          gray: '#737373',
        },
        danger: '#E74040',
        success: '#2DC071',
        muted: '#BDBDBD',
        disabled: '#8EC2F2',
        'light-gray': '#FAFAFA',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('children', '&>*')
    }),
  ],
}
export default withMT(config)
