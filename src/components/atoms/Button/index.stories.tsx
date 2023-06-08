import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { styled } from "styled-components";

const meta: Meta<typeof Button> = {
  title: "components/atoms",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  render: () => (
    <div>
      <div>
        <Title>Default</Title>
        <ButtonWrapper>Button</ButtonWrapper>
        <ButtonWrapper variant="Secondary">Button</ButtonWrapper>
        <ButtonWrapper variant="Important">Button</ButtonWrapper>
      </div>
      <div>
        <Title>Disabled</Title>
        <ButtonWrapper disabled>Button</ButtonWrapper>
        <ButtonWrapper disabled variant="Secondary">
          Button
        </ButtonWrapper>
        <ButtonWrapper disabled variant="Important">
          Button
        </ButtonWrapper>
      </div>
    </div>
  ),
};

const ButtonWrapper = styled(Button)`
  margin: 0 8px;
`;
const Title = styled.h2`
  color: #fff;
`;
