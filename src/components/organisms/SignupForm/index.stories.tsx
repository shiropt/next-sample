import type { Meta, StoryObj } from "@storybook/react";
import { SignupForm } from ".";

const meta: Meta<typeof SignupForm> = {
  title: "components/organisms",
  component: SignupForm,
};

export default meta;
type Story = StoryObj<typeof SignupForm>;

export const SignupFormStory: Story = {
  render: () => (
    <div>
      <SignupForm />
    </div>
  ),
};
