import type { Meta, StoryObj } from "@storybook/react-vite";
import MkTag from "./MkTag.tsx";

const meta = {
  title: "Components/Tag",
  component: MkTag,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkTag>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
