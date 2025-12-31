import type { Meta, StoryObj } from "@storybook/react-vite";
import MkStatusIndicator from "./MkStatusIndicator.tsx";

const meta = {
  title: "Feedback/Status Indicator",
  component: MkStatusIndicator,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkStatusIndicator>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    color: "success",
    text: "Complete",
  },
};

export const Test: Story = {
  args: {
    color: "neutral",
    text: "Test",
  },
};
