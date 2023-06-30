import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmModal } from ".";

const meta: Meta<typeof ConfirmModal> = {
  title: "components/components/molecules",
  component: ConfirmModal,
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const ConfirmModalStory: Story = {
  render: () => (
    <div>
      <ConfirmModal />
    </div>
  ),
};
