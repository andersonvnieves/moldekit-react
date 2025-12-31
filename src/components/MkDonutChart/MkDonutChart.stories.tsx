import type { Meta, StoryObj } from "@storybook/react-vite";
import MkDonutChart from "./MkDonutChart.tsx";

const meta = {
  title: "Charts & Visualization/DonutChart",
  component: MkDonutChart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkDonutChart>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
