import type { Meta, StoryObj } from "@storybook/react-vite";
import MkRadioButton from "./MkRadioButton.tsx";

const meta = {
  title: "Inputs & Controls/RadioButton",
  component: MkRadioButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkRadioButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
