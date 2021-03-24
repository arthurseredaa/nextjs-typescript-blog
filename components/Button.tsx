import { FC, forwardRef, ReactNode } from "react";
import styled, { keyframes } from "styled-components"

interface ButtonProps {
  background?: string;
  color?: string;
  padding?: string;
  children?: ReactNode
}

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(5deg);
  }
  50% {
    transform: rotateZ(-10deg);
  }
  75% {
    transform: rotateZ(5deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`;

const StyledButton = styled.button`
  background-color: ${({ background = "#000" }: ButtonProps) => background};
  color: ${({ color = "#fff" }: ButtonProps) => color};
  padding: ${({ padding = "5px 10px" }: ButtonProps) => padding};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  &:hover {
    animation: ${rotateAnimation} .3s linear;
  }
`;

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }: ButtonProps, ref) => (
  <StyledButton ref={ref} {...props}>{children}</StyledButton>)
)
