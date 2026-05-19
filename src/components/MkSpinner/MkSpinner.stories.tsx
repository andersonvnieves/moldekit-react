import type { Meta, StoryObj } from "@storybook/react-vite";
import { MkSpinner, type MkSpinnerProps } from "./index.ts";

const meta = {
  title: "Feedback/Spinner",
  component: MkSpinner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {} satisfies MkSpinnerProps,
} satisfies Meta<typeof MkSpinner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSpinner size={args.size} color={args.color} />
    </div>
  ),
  args: {
    size: "md",
    color: "default",
  },
};
