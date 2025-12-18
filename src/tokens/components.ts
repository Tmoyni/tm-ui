/**
 * Component Tokens (Tier 3)
 * Component-specific tokens that reference semantic tokens
 * These are used directly in component implementations
 */

import { semantic } from './semantic';

export const components = {
  button: {
    variants: {
      primary: {
        background: {
          default: semantic.colors.brand.primary.default,
          hover: semantic.colors.brand.primary.hover,
          active: semantic.colors.brand.primary.active,
          disabled: semantic.colors.state.disabled.background,
        },
        text: {
          default: semantic.colors.text.inverse,
          disabled: semantic.colors.state.disabled.text,
        },
        border: {
          default: 'transparent',
          hover: 'transparent',
          active: 'transparent',
          disabled: 'transparent',
        },
      },
      secondary: {
        background: {
          default: semantic.colors.brand.secondary.default,
          hover: semantic.colors.brand.secondary.hover,
          active: semantic.colors.brand.secondary.active,
          disabled: semantic.colors.state.disabled.background,
        },
        text: {
          default: semantic.colors.text.inverse,
          disabled: semantic.colors.state.disabled.text,
        },
        border: {
          default: 'transparent',
          hover: 'transparent',
          active: 'transparent',
          disabled: 'transparent',
        },
      },
      neutral: {
        background: {
          default: semantic.colors.neutral.default,
          hover: semantic.colors.neutral.hover,
          active: semantic.colors.neutral.active,
          disabled: semantic.colors.state.disabled.background,
        },
        text: {
          default: semantic.colors.text.primary,
          disabled: semantic.colors.state.disabled.text,
        },
        border: {
          default: semantic.colors.border.default,
          hover: semantic.colors.border.hover,
          active: semantic.colors.border.hover,
          disabled: semantic.colors.border.disabled,
        },
      },
    },
    spacing: {
      paddingX: {
        sm: semantic.spacing.button.paddingX.sm,
        md: semantic.spacing.button.paddingX.md,
        lg: semantic.spacing.button.paddingX.lg,
      },
      paddingY: {
        sm: semantic.spacing.button.paddingY.sm,
        md: semantic.spacing.button.paddingY.md,
        lg: semantic.spacing.button.paddingY.lg,
      },
      gap: semantic.spacing.button.gap,
    },
    borderRadius: semantic.borderRadius.button,
    typography: {
      fontSize: {
        sm: semantic.typography.button.fontSize.sm,
        md: semantic.typography.button.fontSize.md,
        lg: semantic.typography.button.fontSize.lg,
      },
      fontWeight: semantic.typography.button.fontWeight,
      lineHeight: semantic.typography.button.lineHeight,
    },
    effects: {
      focus: {
        outlineWidth: semantic.effects.focusRing.width,
        outlineColor: semantic.effects.focusRing.color,
        outlineOffset: semantic.effects.focusRing.offset,
      },
      disabled: {
        opacity: semantic.effects.disabled.opacity,
      },
    },
  },
} as const;

export type Components = typeof components;
