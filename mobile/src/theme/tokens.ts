/**
 * ALPH PAY · React Native Theme & Design System Tokens
 * Fully aligned with WCAG AAA standards, Plus Jakarta Sans, and dual-accent architecture
 */

export const ThemeTokens = {
  colors: {
    // Brand Neutrals
    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceElevated: '#F1F5F9',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textTertiary: '#94A3B8',
    borderSubtle: '#E2E8F0',
    borderStrong: '#CBD5E1',

    // Parent Control Layer (Indigo)
    parent: {
      primary: '#4338CA',
      deep: '#1E1B4B',
      subtle: '#EEF2FF',
      border: '#C7D2FE',
      active: '#3730A3',
      glow: 'rgba(67, 56, 202, 0.15)',
    },

    // Child Spending Layer (Teal)
    child: {
      primary: '#0D9488',
      accent: '#14B8A6',
      subtle: '#CCFBF1',
      deep: '#115E59',
      border: '#99F6E4',
      glow: 'rgba(13, 148, 136, 0.15)',
    },

    // Status Tokens
    status: {
      success: '#059669',
      successBg: '#ECFDF5',
      warning: '#D97706',
      warningBg: '#FFFBEB',
      danger: '#DC2626',
      dangerBg: '#FEF2F2',
      info: '#0284C7',
      infoBg: '#F0F9FF',
    },
  },

  typography: {
    fontFamily: {
      display: 'PlusJakartaSans-Bold',
      semiBold: 'PlusJakartaSans-SemiBold',
      medium: 'PlusJakartaSans-Medium',
      regular: 'PlusJakartaSans-Regular',
      arabic: 'ReadexPro-Regular',
    },
    sizes: {
      displayHero: 32,
      h1: 24,
      h2: 18,
      h3: 15,
      bodyLarge: 16,
      bodyMedium: 14,
      bodySmall: 12,
      microLabel: 10,
    },
  },

  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },

  radii: {
    sm: 6,
    md: 10,
    lg: 14,
    xl: 20,
    xxl: 28,
    full: 9999,
  },
};
