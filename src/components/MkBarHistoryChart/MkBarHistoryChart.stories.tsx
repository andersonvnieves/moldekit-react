import type { Meta, StoryObj } from "@storybook/react-vite";
import MkBarHistoryChart from "./MkBarHistoryChart.tsx";
const meta = {
  title: "Charts & Visualization/BarHistoryChart",
  component: MkBarHistoryChart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkBarHistoryChart>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 h-[320px]">
      <MkBarHistoryChart className={args.className} data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "J", value: 80, type: "faded" },
      { label: "F", value: 50, type: "faded" },
      { label: "M", value: 89, type: "faded" },
      { label: "A", value: 45, type: "faded" },
      { label: "M", value: 95, type: "regular" },
      { label: "J", value: 45, type: "regular" },
      { label: "J", value: 85, type: "regular" },
      { label: "J", value: 5, type: "no-data" },
      { label: "J", value: 5, type: "no-data" },
      { label: "J", value: 5, type: "no-data" },
      { label: "J", value: 5, type: "no-data" },
      { label: "J", value: 5, type: "no-data" },
    ],
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkBarHistoryChart className={args.className} data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "J", value: 80, type: "faded" },
      { label: "F", value: 50, type: "faded" },
      { label: "M", value: 89, type: "faded" },
      { label: "A", value: 45, type: "faded" },
      { label: "M", value: 95, type: "regular" },
      { label: "J", value: 45, type: "regular" },
      { label: "J", value: 85, type: "regular" },
      { label: "J", value: 5, type: "no-data" },
      { label: "J", value: 5, type: "no-data" },
      { label: "J", value: 5, type: "no-data" },
      { label: "J", value: 5, type: "no-data" },
      { label: "J", value: 5, type: "no-data" },
    ],
  },
};
