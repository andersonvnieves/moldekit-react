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
  render: (args) => (
    <div className="p-6">
      <MkStatusIndicator color={args.color} text={args.text} />
    </div>
  ),
  args: {
    color: "success",
    text: "Complete",
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkStatusIndicator color={args.color} text={args.text} />
    </div>
  ),
  args: {
    color: "neutral",
    text: "Test",
  },
};
