import type { Meta, StoryObj } from "@storybook/react-vite";
import MkAlert from "./MkAlert.tsx";

const meta = {
  title: "Components/Alert",
  component: MkAlert,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkAlert>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
