import type { Meta, StoryObj } from "@storybook/react";
import { SigninForm } from ".";

const meta: Meta<typeof SigninForm> = {
  title: "components/organisms",
  component: SigninForm,
};

export default meta;
type Story = StoryObj<typeof SigninForm>;

export const SigninFormStory: Story = {
  render: () => (
    <div>
      <SigninForm />
    </div>
  ),
};
