import * as React from 'react';
import { StyledButton } from './Button.Styles';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, type = 'button', ...props }, ref) => {
    return (
      <StyledButton ref={ref} type={type} className={className} $variant={variant} {...props} />
    );
  }
);
Button.displayName = 'Button';
