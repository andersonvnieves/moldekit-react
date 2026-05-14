import type { Meta, StoryObj } from "@storybook/react-vite";
import MkHorizontalBarChart from "./MkHorizontalBarChart.tsx";

const meta = {
  title: "Charts & Visualization/HorizontalBarChart",
  component: MkHorizontalBarChart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkHorizontalBarChart>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkHorizontalBarChart data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "A", value: 45 },
      { label: "B", value: 15 },
      { label: "C", value: 30 },
      { label: "C", value: 10 },
    ],
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkHorizontalBarChart data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "A", value: 45 },
      { label: "B", value: 15 },
      { label: "C", value: 30 },
      { label: "C", value: 10 },
    ],
  },
};
