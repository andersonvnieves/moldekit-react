import type { Meta, StoryObj } from "@storybook/react-vite";
import MkTotalizers from "./MkTotalizers.tsx";

const meta = {
  title: "Data Display/Totalizers",
  component: MkTotalizers,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkTotalizers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
