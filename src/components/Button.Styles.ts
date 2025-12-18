import styled, { css } from 'styled-components';
import { tokens } from '../tokens';

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: inherit;
  transition: all 0.2s ease-in-out;

  /* Typography */
  font-size: ${tokens.components.button.typography.fontSize.md};
  font-weight: ${tokens.components.button.typography.fontWeight};
  line-height: ${tokens.components.button.typography.lineHeight};

  /* Spacing */
  padding: ${tokens.components.button.spacing.paddingY.md}
    ${tokens.components.button.spacing.paddingX.md};
  border-radius: ${tokens.components.button.borderRadius};

  /* Focus state */
  &:focus-visible {
    outline: ${tokens.components.button.effects.focus.outlineWidth} solid
      ${tokens.components.button.effects.focus.outlineColor};
    outline-offset: ${tokens.components.button.effects.focus.outlineOffset};
  }

  /* Disabled state */
  &:disabled {
    opacity: ${tokens.components.button.effects.disabled.opacity};
    cursor: not-allowed;
  }
`;

const variantStyles = {
  primary: css`
    background-color: ${tokens.components.button.variants.primary.background.default};
    color: ${tokens.components.button.variants.primary.text.default};
    border-color: ${tokens.components.button.variants.primary.border.default};

    &:hover:not(:disabled) {
      background-color: ${tokens.components.button.variants.primary.background.hover};
      border-color: ${tokens.components.button.variants.primary.border.hover};
    }

    &:active:not(:disabled) {
      background-color: ${tokens.components.button.variants.primary.background.active};
      border-color: ${tokens.components.button.variants.primary.border.active};
    }

    &:disabled {
      background-color: ${tokens.components.button.variants.primary.background.disabled};
      color: ${tokens.components.button.variants.primary.text.disabled};
      border-color: ${tokens.components.button.variants.primary.border.disabled};
    }
  `,
  secondary: css`
    background-color: ${tokens.components.button.variants.secondary.background.default};
    color: ${tokens.components.button.variants.secondary.text.default};
    border-color: ${tokens.components.button.variants.secondary.border.default};

    &:hover:not(:disabled) {
      background-color: ${tokens.components.button.variants.secondary.background.hover};
      border-color: ${tokens.components.button.variants.secondary.border.hover};
    }

    &:active:not(:disabled) {
      background-color: ${tokens.components.button.variants.secondary.background.active};
      border-color: ${tokens.components.button.variants.secondary.border.active};
    }

    &:disabled {
      background-color: ${tokens.components.button.variants.secondary.background.disabled};
      color: ${tokens.components.button.variants.secondary.text.disabled};
      border-color: ${tokens.components.button.variants.secondary.border.disabled};
    }
  `,
};

export const StyledButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  ${baseStyles}
  ${({ $variant = 'primary' }) => variantStyles[$variant]}
`;
