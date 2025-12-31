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
  args: {},
};

export const Test: Story = {
  args: {},
};
