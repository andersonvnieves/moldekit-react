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
  args: {},
};

export const Test: Story = {
  args: {},
};
