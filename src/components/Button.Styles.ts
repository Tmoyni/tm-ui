import styled, { css } from "styled-components"; 
import { ButtonProps } from "./Button"; 

const baseStyles = css`
    display: inline-flex;
    align-items: center; 
    justify-content: center; 
    cursor: pointer;
`;

const variantStyles = {
    primary: css`
        background-color: blue;
        &:hover {
            background-color: darkblue;
        }
    `,
    secondary: css`
        background-color: gray;
        &:hover {
            background-color: darkgray;
        }
    `
};

export const StyledButton = styled.button<ButtonProps>`
    ${baseStyles}
    ${({ variant = "primary" }) => variantStyles[variant]}
`;
