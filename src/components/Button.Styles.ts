import styled, { css } from "styled-components"; 

const baseStyles = css`
    display: inline-flex;
    align-items: center; 
    justify-content: center; 
    cursor: pointer;
    &:focus-visible { 
        outline: 2px solid Highlight; 
        outline-offset: 2px; 
    }
    &:disabled { 
        opacity: 0.6; 
        cursor: not-allowed; 
    }
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

export const StyledButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
    ${baseStyles}
    ${({ $variant = "primary" }) => variantStyles[$variant]}
`;