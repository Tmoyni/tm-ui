/**
 * Primitive Tokens (Tier 1)
 * Raw design values - these are the foundation of the design system
 */

export const primitives = {
  colors: {
    brand: {
      100: '#F5F5F5',
      200: '#E6E6E6',
      300: '#D9D9D9',
      400: '#B3B3B3',
      500: '#757575',
      600: '#444444',
      700: '#383838',
      800: '#2C2C2C',
      900: '#1E1E1E',
      1000: '#111111',
    },
    gray: {
      100: '#F5F5F5',
      200: '#E6E6E6',
      300: '#D9D9D9',
      400: '#B3B3B3',
      500: '#757575',
      600: '#444444',
      700: '#383838',
      800: '#2C2C2C',
      900: '#1E1E1E',
      1000: '#111111',
    },
    green: {
      100: '#EBFFEE',
      200: '#CFF7D3',
      300: '#AFF4C6',
      400: '#85E0A3',
      500: '#14AE5C',
      600: '#009951',
      700: '#008043',
      800: '#02542D',
      900: '#024023',
      1000: '#062D1B',
    },
    pink: {
      100: '#FCF1FD',
      200: '#FAE1FA',
      300: '#F5C0EF',
      400: '#F19EDC',
      500: '#EA3FB8',
      600: '#D732A8',
      700: '#BA2A92',
      800: '#8A226F',
      900: '#57184A',
      1000: '#3F1536',
    },
    red: {
      100: '#FEE9E7',
      200: '#FDD3D0',
      300: '#FCB3AD',
      400: '#F4776A',
      500: '#EC221F',
      600: '#C00F0C',
      700: '#900B09',
      800: '#690807',
      900: '#4D0B0A',
      1000: '#300603',
    },
    yellow: {
      100: '#FFFBEB',
      200: '#FFFBEB',
      300: '#FFFBEB',
      400: '#E8B931',
      500: '#E5A000',
      600: '#BF6A02',
      700: '#975102',
      800: '#682D03',
      900: '#522504',
      1000: '#401B01',
    },
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  },
  spacing: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    full: '9999px',
  },
  borderWidth: {
    0: '0',
    1: '1px',
    2: '2px',
    4: '4px',
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  opacity: {
    0: '0',
    10: '0.1',
    20: '0.2',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    80: '0.8',
    90: '0.9',
    100: '1',
  },
} as const;

export type Primitives = typeof primitives;
