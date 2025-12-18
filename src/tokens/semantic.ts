/**
 * Semantic Tokens (Tier 2)
 * Context-specific tokens that reference primitive tokens
 * These provide meaning and intent to the design system
 */

import { primitives } from './primitives';

export const semantic = {
  colors: {
    // Brand colors
    brand: {
      primary: {
        default: primitives.colors.brand[600],
        hover: primitives.colors.brand[700],
        active: primitives.colors.brand[800],
        subtle: primitives.colors.brand[100],
        subtleHover: primitives.colors.brand[200],
      },
      secondary: {
        default: primitives.colors.gray[500],
        hover: primitives.colors.gray[600],
        active: primitives.colors.gray[700],
        subtle: primitives.colors.gray[100],
        subtleHover: primitives.colors.gray[200],
      },
    },
    // Neutral colors for general UI
    neutral: {
      default: primitives.colors.gray[300],
      hover: primitives.colors.gray[400],
      active: primitives.colors.gray[500],
      subtle: primitives.colors.gray[100],
      subtleHover: primitives.colors.gray[200],
    },
    // Text colors
    text: {
      primary: primitives.colors.gray[900],
      secondary: primitives.colors.gray[600],
      tertiary: primitives.colors.gray[500],
      inverse: primitives.colors.white,
      disabled: primitives.colors.gray[400],
    },
    // Border colors
    border: {
      default: primitives.colors.gray[400],
      hover: primitives.colors.gray[500],
      focus: primitives.colors.brand[600],
      disabled: primitives.colors.gray[300],
    },
    // Background colors
    background: {
      primary: primitives.colors.white,
      secondary: primitives.colors.gray[100],
      tertiary: primitives.colors.gray[200],
      disabled: primitives.colors.gray[200],
    },
    // State colors (for future use)
    state: {
      disabled: {
        background: primitives.colors.gray[200],
        text: primitives.colors.gray[400],
      },
    },
  },
  spacing: {
    button: {
      paddingX: {
        sm: primitives.spacing[3],
        md: primitives.spacing[4],
        lg: primitives.spacing[5],
      },
      paddingY: {
        sm: primitives.spacing[1],
        md: primitives.spacing[2],
        lg: primitives.spacing[3],
      },
      gap: primitives.spacing[2],
    },
  },
  borderRadius: {
    button: primitives.borderRadius.md,
    input: primitives.borderRadius.md,
    card: primitives.borderRadius.lg,
  },
  typography: {
    button: {
      fontSize: {
        sm: primitives.fontSize.sm,
        md: primitives.fontSize.base,
        lg: primitives.fontSize.lg,
      },
      fontWeight: primitives.fontWeight.medium,
      lineHeight: primitives.lineHeight.normal,
    },
  },
  effects: {
    focusRing: {
      width: primitives.borderWidth[2],
      color: primitives.colors.brand[600],
      offset: primitives.spacing[1],
    },
    disabled: {
      opacity: primitives.opacity[60],
    },
  },
} as const;

export type Semantic = typeof semantic;
