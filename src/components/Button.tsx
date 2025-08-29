import * as React from 'react'; 
import { StyledButton } from './Button.Styles';

export type ButtonProps = {
    variant?: 'primary' | 'secondary'; 
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary', 
    className = '',
    ...props
}) => {
    return <StyledButton className={className} variant={variant} {...props} />;
}

