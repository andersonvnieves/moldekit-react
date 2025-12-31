import type { Meta, StoryObj } from "@storybook/react-vite";
import MkProgressBar from "./MkProgressBar.tsx";

const meta = {
  title: "Data Display/Progress Bar",
  component: MkProgressBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    percentage: 25,
  },
} satisfies Meta<typeof MkProgressBar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkProgressBar percentage={args.percentage} />
    </div>
  ),
  args: {
    //color: "success",
    percentage: 25,
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkProgressBar percentage={args.percentage} />
    </div>
  ),
  args: {
    //color: "neutral",
    percentage: 25,
  },
};
