import type { Meta, StoryObj } from "@storybook/react-vite";
import MkTimeInput from "./MkTimeInput.tsx";

const meta = {
  title: "Components/TimeInput",
  component: MkTimeInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkTimeInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
