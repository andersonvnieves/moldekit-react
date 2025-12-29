import type { Meta, StoryObj } from "@storybook/react-vite";
import MkDivider from "./MkDivider.tsx";

const meta = {
  title: "Controls/Divider",
  component: MkDivider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkDivider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  decorators: [
    (Story) => (
      <div className="h-32 flex items-center gap-4">
        <div className="text-sm">Left content</div>
        <Story />
        <div className="text-sm">Right content</div>
      </div>
    ),
  ],
};
