import type { Meta, StoryObj } from "@storybook/react";
import { TextBox } from ".";
import { styled } from "styled-components";
import { render } from "react-dom";

const meta: Meta<typeof TextBox> = {
  title: "components/atoms",
  component: TextBox,
};

export default meta;
type Story = StoryObj<typeof TextBox>;

export const TextBoxStory: Story = {
  render: () => (
    <div>
      <Title>Default</Title>
      <TextBox label="名前を入力してください" />
      <Title>Error</Title>
      <TextBox label="名前を入力してください" error="名前は必須項目です" />
    </div>
  ),
};
const Title = styled.h2`
  color: #fff;
`;
