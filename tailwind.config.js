/** @type {import('tailwindcss').Config} */

const getFluidSize = (desktopSize, mobileSize) => {
  const mobileViewport = 390;
  const desktopViewport = 1440;
  const viewportRange = desktopViewport - mobileViewport;
  const sizeRange = desktopSize - mobileSize;
  return `max( ${mobileSize}px, calc( ${sizeRange} * (100vw - ${mobileSize}px) / ${viewportRange} + ${mobileSize}px) )`
}

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontSize: ({theme}) => ({
      'h1': [`${getFluidSize(86, 46)}`, { 
        lineHeight: '1em', 
        letterSpacing: '-0.05em',
        fontWeight: 600, 
      }],
      'h2': [`${getFluidSize(64, 40)}`, {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'h3': [`${getFluidSize(46, 32)}`, {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'h4': [`${getFluidSize(34, 26)}`, {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'h5': [`${getFluidSize(26, 20)}`, {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'h6': [`${getFluidSize(20, 16)}`, {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'pullquote': [`${getFluidSize(86, 46)}`, {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 600,
      }],
      'body': [`${getFluidSize(16, 14)}`, {
        lineHeight: '1em',
        letterSpacing: '-0.05em',
        fontWeight: 400,
      }],
      'caption': [`${getFluidSize(14, 14)}`, {
        lineHeight: '1em',
        letterSpacing: '0em',
        fontWeight: 400,
      }],
      'utility': [`${getFluidSize(12, 12)}`, {
        lineHeight: '1em',
        letterSpacing: '0.1em',
        fontWeight: 400,
      }],
    }),
    fontFamily: {
      'mono': ['"Suisse Intl Mono"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
      'primary': ['"Suisse Intl"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
      'secondary': ['"Suisse Intl"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
    },
    spacing: { 
      none: '0em',
      '3xs': `${getFluidSize(5, 5)}`,
      '2xs': `${getFluidSize(10, 10)}`,
      'xs': `${getFluidSize(15, 15)}`,
      'sm': `${getFluidSize(30, 20)}`,
      'md': `${getFluidSize(40, 30)}`,
      'lg': `${getFluidSize(60, 40)}`,
      'xl': `${getFluidSize(80, 60)}`,
      '2xl': `${getFluidSize(120, 80)}`,
      '3xl': `${getFluidSize(160, 100)}`,
      'page-margin': `${getFluidSize(60, 20)}`,
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

