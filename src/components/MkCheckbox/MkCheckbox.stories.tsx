import type { Meta, StoryObj } from "@storybook/react-vite";
import MkCheckbox from "./MkCheckbox.tsx";

const meta = {
  title: "Components/Checkbox",
  component: MkCheckbox,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkCheckbox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
