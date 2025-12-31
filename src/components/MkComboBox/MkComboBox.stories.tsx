import type { Meta, StoryObj } from "@storybook/react-vite";
import MkComboBox from "./MkComboBox.tsx";

const meta = {
  title: "Components/ComboBox",
  component: MkComboBox,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkComboBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
