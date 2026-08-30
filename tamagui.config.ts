import { createTamagui, createFont, createTokens } from 'tamagui';

// 1. Spacing and Size Tokens
const size = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 32,
  8: 48,
  9: 64,
  true: 16,
};

const space = {
  ...size,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  true: 16,
};

// 2. Radii Tokens
const radius = {
  0: 0,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  xxl: 28,
  full: 9999,
  true: 10,
};

// 3. Fonts Setup (Plus Jakarta Sans and Readex Pro for Arabic)
const plusJakartaFont = createFont({
  family: 'Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  size: {
    1: 10,
    2: 12,
    3: 14,
    4: 15,
    5: 16,
    6: 18,
    7: 24,
    8: 32,
    true: 14,
  },
  lineHeight: {
    1: 14,
    2: 16,
    3: 18,
    4: 20,
    5: 22,
    6: 24,
    7: 30,
    8: 38,
  },
  weight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
  letterSpacing: {
    4: 0,
    true: 0,
  },
  face: {},
});

const readexArabicFont = createFont({
  family: 'Readex Pro, sans-serif',
  size: {
    1: 10,
    2: 12,
    3: 14,
    4: 15,
    5: 16,
    6: 18,
    7: 24,
    true: 14,
  },
  lineHeight: {
    1: 15,
    2: 18,
    3: 20,
    4: 22,
    5: 24,
    6: 26,
    7: 32,
  },
  weight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  letterSpacing: {
    true: 0,
  },
  face: {},
});

// 4. Global Raw Color Tokens
const color = {
  white: '#FFFFFF',
  black: '#000000',
  
  // Brand Neutrals (Light)
  lightBg: '#F8FAFC',
  lightSurface: '#FFFFFF',
  lightSurfaceElevated: '#F1F5F9',
  lightSurfaceSubtle: '#F8FAFC',
  lightTextPrimary: '#0F172A',
  lightTextSecondary: '#475569',
  lightTextTertiary: '#94A3B8',
  lightBorderSubtle: '#E2E8F0',
  lightBorderStrong: '#CBD5E1',

  // Brand Neutrals (Dark / Premium Navy)
  darkBg: '#090815', // Premium dark navy
  darkSurface: '#121124', // Card backgrounds
  darkSurfaceElevated: '#1D1C36',
  darkSurfaceSubtle: '#0F0E20',
  darkTextPrimary: '#F8FAFC',
  darkTextSecondary: '#94A3B8',
  darkTextTertiary: '#64748B',
  darkBorderSubtle: '#2E2D4A',
  darkBorderStrong: '#444265',

  // Parent Accents (Indigo Slate)
  parentPrimary: '#4338CA',
  parentDeep: '#1E1B4B',
  parentSubtle: '#EEF2FF',
  parentBorder: '#C7D2FE',
  parentActive: '#3730A3',

  // Child Accents (Vibrant Teal)
  childPrimary: '#0D9488',
  childAccent: '#14B8A6',
  childSubtle: '#CCFBF1',
  childDeep: '#115E59',
  childBorder: '#99F6E4',

  // Status Colors
  success: '#059669',
  successBgLight: '#ECFDF5',
  successBgDark: '#022D1F',
  successBorderLight: '#A7F3D0',
  successBorderDark: '#047857',

  warning: '#D97706',
  warningBgLight: '#FFFBEB',
  warningBgDark: '#2D1B02',
  warningBorderLight: '#FDE68A',
  warningBorderDark: '#B45309',

  danger: '#DC2626',
  dangerBgLight: '#FEF2F2',
  dangerBgDark: '#350505',
  dangerBorderLight: '#FECACA',
  dangerBorderDark: '#B91C1C',

  info: '#0284C7',
  infoBgLight: '#F0F9FF',
  infoBgDark: '#04283E',
  infoBorderLight: '#BAE6FD',
  infoBorderDark: '#0369A1',
};

const tokens = createTokens({
  size,
  space,
  radius,
  color,
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    50: 50,
    95: 95,
  },
});

// 5. Light and Dark Theme Maps
const themes = {
  light: {
    background: tokens.color.lightBg,
    backgroundHover: tokens.color.lightSurfaceElevated,
    backgroundPress: tokens.color.lightBorderSubtle,
    color: tokens.color.lightTextPrimary,
    colorHover: tokens.color.lightTextPrimary,
    colorPress: tokens.color.lightTextPrimary,
    cardBackground: tokens.color.lightSurface,
    cardBackgroundHover: tokens.color.lightSurfaceElevated,
    borderColor: tokens.color.lightBorderSubtle,
    borderColorStrong: tokens.color.lightBorderStrong,
    primary: tokens.color.childPrimary,
    primaryHover: tokens.color.childAccent,
    parentPrimary: tokens.color.parentPrimary,
    parentPrimarySubtle: tokens.color.parentSubtle,
    parentPrimaryBorder: tokens.color.parentBorder,
    childPrimary: tokens.color.childPrimary,
    childPrimarySubtle: tokens.color.childSubtle,
    childPrimaryBorder: tokens.color.childBorder,
    textSecondary: tokens.color.lightTextSecondary,
    textTertiary: tokens.color.lightTextTertiary,
    
    // Status
    success: tokens.color.success,
    successBg: tokens.color.successBgLight,
    successBorder: tokens.color.successBorderLight,
    warning: tokens.color.warning,
    warningBg: tokens.color.warningBgLight,
    warningBorder: tokens.color.warningBorderLight,
    danger: tokens.color.danger,
    dangerBg: tokens.color.dangerBgLight,
    dangerBorder: tokens.color.dangerBorderLight,
    info: tokens.color.info,
    infoBg: tokens.color.infoBgLight,
    infoBorder: tokens.color.infoBorderLight,
  },
  dark: {
    background: tokens.color.darkBg,
    backgroundHover: tokens.color.darkSurfaceElevated,
    backgroundPress: tokens.color.darkBorderSubtle,
    color: tokens.color.darkTextPrimary,
    colorHover: tokens.color.darkTextPrimary,
    colorPress: tokens.color.darkTextPrimary,
    cardBackground: tokens.color.darkSurface,
    cardBackgroundHover: tokens.color.darkSurfaceElevated,
    borderColor: tokens.color.darkBorderSubtle,
    borderColorStrong: tokens.color.darkBorderStrong,
    primary: tokens.color.childPrimary,
    primaryHover: tokens.color.childAccent,
    parentPrimary: tokens.color.parentPrimary,
    parentPrimarySubtle: tokens.color.parentDeep,
    parentPrimaryBorder: tokens.color.parentActive,
    childPrimary: tokens.color.childPrimary,
    childPrimarySubtle: tokens.color.childDeep,
    childPrimaryBorder: tokens.color.childAccent,
    textSecondary: tokens.color.darkTextSecondary,
    textTertiary: tokens.color.darkTextTertiary,
    
    // Status
    success: tokens.color.success,
    successBg: tokens.color.successBgDark,
    successBorder: tokens.color.successBorderDark,
    warning: tokens.color.warning,
    warningBg: tokens.color.warningBgDark,
    warningBorder: tokens.color.warningBorderDark,
    danger: tokens.color.danger,
    dangerBg: tokens.color.dangerBgDark,
    dangerBorder: tokens.color.dangerBorderDark,
    info: tokens.color.info,
    infoBg: tokens.color.infoBgDark,
    infoBorder: tokens.color.infoBorderDark,
  },
};

// 6. Complete Configuration export
const config = createTamagui({
  tokens,
  themes,
  fonts: {
    heading: plusJakartaFont,
    body: plusJakartaFont,
    arabic: readexArabicFont,
  },
  shorthands: {
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    p: 'padding',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    m: 'margin',
    bg: 'backgroundColor',
    w: 'width',
    h: 'height',
    f: 'flex',
    ai: 'alignItems',
    jc: 'justifyContent',
  },
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
});

export type AppConfig = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
