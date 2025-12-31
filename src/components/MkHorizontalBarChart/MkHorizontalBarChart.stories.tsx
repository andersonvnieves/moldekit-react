import type { Meta, StoryObj } from "@storybook/react-vite";
import MkHorizontalBarChart from "./MkHorizontalBarChart.tsx";

const meta = {
  title: "Components/HorizontalBarChart",
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
  args: {},
};

export const Test: Story = {
  args: {},
};
