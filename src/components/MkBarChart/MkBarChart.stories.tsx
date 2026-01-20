import type { Meta, StoryObj } from "@storybook/react-vite";
import MkBarChart from "./MkBarChart.tsx";

const meta = {
  title: "Charts & Visualization/BarChart",
  component: MkBarChart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkBarChart>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 h-[320px]">
      <MkBarChart className={args.className} data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "Label", value: 80, type: "faded" },
      { label: "Label", value: 50, type: "faded" },
      { label: "Label", value: 89, type: "faded" },
      { label: "Label", value: 45, type: "faded" },
      { label: "Label", value: 95, type: "regular" },
    ],
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkBarChart className={args.className} data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "Label", value: 80, type: "faded" },
      { label: "Label", value: 50, type: "faded" },
      { label: "Label", value: 89, type: "faded" },
      { label: "Label", value: 45, type: "faded" },
      { label: "Label", value: 95, type: "regular" },
    ],
  },
};
