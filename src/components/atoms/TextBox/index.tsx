import { ComponentProps, forwardRef, useState } from "react";
import { styled } from "styled-components";
import { colors } from "../../../constants/colors";

type Props = { label?: string; error?: string } & ComponentProps<"input">;

export const TextBox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const color = !!props.error
    ? colors.error
    : isFocused
    ? colors.white
    : colors.darkestGray;

  return (
    <>
      <Label color={color}>{props.label}</Label>
      <Input
        color={color}
        {...props}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Error>{props.error}</Error>
    </>
  );
});

TextBox.displayName = "TextBox";

const Input = styled.input<{ color: string }>`
  border: none;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  border-bottom: ${({ color }) => `1px solid ${color}`};
  color: white;
  font-size: 16px;
  padding: 8px 0;
`;
const Label = styled.label<{ color: string }>`
  color: ${({ color }) => color};
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
`;
const Error = styled.p`
  margin: 4px;
  color: ${colors.error};
`;
