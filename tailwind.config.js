/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontSize: {
      'h1': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'h2': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'h3': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'h4': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'h5': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'h6': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'pullquote': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'body': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 400,
      }],
      'caption': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '0em',
        fontWeight: 400,
      }],
      'utility': ['var(--font-size)', {
        lineHeight: '1em',
        letterSpacing: '0.1em',
        fontWeight: 400,
      }],
    },
    fontFamily: {
      'mono': ['"Suisse Intl Mono"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
      'primary': ['"Suisse Intl"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
      'secondary': ['"Suisse Intl"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
    },
    spacing: { 
      none: '0em',
      '3xs': '5px',
      '2xs': '10px',
      'xs': '15px',
      'sm': '30px',
      'md': '40px',
      'lg': '60px',
      'xl': '80px',
      '2xl': '120px',
      '3xl': '160px',
      'page-margin': '120px',
    },
    primitiveColors: {
      darkest: '#000000',
      dark: '#666666',
      neutral: '#b8b8b8',
      light: '#f6f6f6',
      lightest: '#ffffff',
      'brand-01': '#FF5C01',
      'brand-02': '#ABC4CA',
      'success': '#25B900',
      'error': '#EC0000',
      'focus': '#0038FF',
    },
    colors: ({ theme}) => ({
      transparent: 'transparent',
      current: 'currentColor',
      'foreground': theme('primitiveColors.darkest'),
      'foreground-secondary': theme('primitiveColors.dark'),
      'background': theme('primitiveColors.lightest'),
      'background-secondary': theme('primitiveColors.light'),
      'border': theme('primitiveColors.neutral'),
      'brand-primary': theme('primitiveColors[brand-01]'),
      'brand-primary-contrast': theme('primitiveColors.darkest'),
      'brand-secondary': theme('primitiveColors.brand-02'),
      'brand-secondary-contrast': theme('primitiveColors.darkest'),
      'success': theme('primitiveColors.success'),
      'error': theme('primitiveColors.error'),
      'focus': theme('primitiveColors.focus'),
    }),
    borderRadius: {
      none: '0rem',
      rounded: '100vw',
      sm: '0.2rem',
      md: '0.8rem',
      lg: '1rem',
    },
    extend: {
      borderWidth: {
        1: '1px'
      }
    },
  },
  plugins: [],
}

