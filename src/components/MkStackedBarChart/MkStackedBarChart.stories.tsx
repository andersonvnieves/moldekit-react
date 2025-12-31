import type { Meta, StoryObj } from "@storybook/react-vite";
import MkStackedBarChart from "./MkStackedBarChart.tsx";

const meta = {
  title: "Charts & Visualization/StackedBarChart",
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
  args: {},
};

export const Test: Story = {
  args: {},
};
