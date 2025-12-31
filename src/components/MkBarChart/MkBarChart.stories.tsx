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
  args: {},
};

export const Test: Story = {
  args: {},
};
