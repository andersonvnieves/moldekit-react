import type { Meta, StoryObj } from "@storybook/react-vite";
import MkDonutChart from "./MkDonutChart.tsx";
import type { MkDonutChartProps } from "./MkDonutChart.props.ts";

const meta = {
  title: "Charts & Visualization/DonutChart",
  component: MkDonutChart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    data: [
      { label: "A", value: 45 },
      { label: "B", value: 15 },
      { label: "C", value: 30 },
      { label: "C", value: 10 },
    ],
    centerValue: "100",
    centerLabel: "Total",
  } satisfies MkDonutChartProps,
} satisfies Meta<typeof MkDonutChart>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {
    data: [{ label: "A", value: 60 }],
    centerValue: "60",
    centerLabel: "Main",
  },
};
