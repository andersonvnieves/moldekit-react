import type { Meta, StoryObj } from "@storybook/react-vite";
import MkLineChart from "./MkLineChart.tsx";

const meta = {
  title: "Charts & Visualization/LineChart",
  component: MkLineChart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkLineChart>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
