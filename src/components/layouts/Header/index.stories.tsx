import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta: Meta<typeof Header> = {
  title: "components/atoms",
  component: Header,
};
export default meta;
type Story = StoryObj<typeof Header>;
export const HeaderStory: Story = {
  render: () => (
    <div>
      <Header />
    </div>
  ),
};
