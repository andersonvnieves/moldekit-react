import type { Meta, StoryObj } from "@storybook/react-vite";
import MkStackedBarChart from "./MkStackedBarChart.tsx";

const meta = {
  title: "Charts & Visualization /StackedBarChart",
  component: MkStackedBarChart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkStackedBarChart>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 h-[320px]">
      <MkStackedBarChart className={args.className} data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "Label", values: [40, 40], type: "faded" },
      { label: "Label", values: [10, 40], type: "faded" },
      { label: "Label", values: [59, 30], type: "faded" },
      { label: "Label", values: [40, 5], type: "faded" },
      { label: "Label", values: [35, 40], type: "regular" },
    ],
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkStackedBarChart className={args.className} data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "Label", values: [40, 40], type: "faded" },
      { label: "Label", values: [10, 40], type: "faded" },
      { label: "Label", values: [59, 30], type: "faded" },
      { label: "Label", values: [40, 5], type: "faded" },
      { label: "Label", values: [35, 40], type: "regular" },
    ],
  },
};
