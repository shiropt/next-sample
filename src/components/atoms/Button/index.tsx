"use client";
import styled from "styled-components";

import { ComponentProps, ReactNode, forwardRef } from "react";
import { colors } from "../../../constants/colors";

type Variant = "Primary" | "Important" | "Secondary";
export type Props = {
  children: ReactNode;
  variant?: Variant;
} & ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <ButtonWrapper {...props} ref={ref} />;
});
Button.displayName = "Button";

const ButtonWrapper = styled.button<Props>`
  overflow: visible;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  -webkit-font-smoothing: inherit;
  appearance: none;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  text-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: ${colors.gray};
  color: ${colors.white};
  width: auto;
  padding: 6px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "Secondary":
        return "transparent";
      case "Important":
        return `${colors.yellow}`;
      default:
        return `${colors.gray}`;
    }
  }};
  color: ${({ variant }) => (variant === "Important" ? "rgb(61, 69, 73)" : `${colors.white}`)};
  border: ${({ variant }) => (variant === "Secondary" ? `2px solid ${colors.white}` : "none")};
  &:hover {
    background: ${({ variant }) => {
      switch (variant) {
        case "Secondary":
          return `${colors.white}`;
        case "Important":
          return `${colors.darkYellow}`;
        default:
          return `${colors.darkGray}`;
      }
    }};
    color: ${({ variant }) =>
      variant === "Secondary" || variant === "Important" ? `${colors.black}` : `${colors.white}`};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
