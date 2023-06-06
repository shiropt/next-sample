import { ComponentProps, forwardRef } from "react";
import { styled } from "styled-components";

type Props = { label?: string; error?: string } & ComponentProps<"input">;

export const TextBox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <Label>{props.label}</Label>
      <Input {...props} ref={ref} />
      <Error>{props.error}</Error>
    </>
  );
});

TextBox.displayName = "TextBox";

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Error = styled.p`
  color: red;
`;
