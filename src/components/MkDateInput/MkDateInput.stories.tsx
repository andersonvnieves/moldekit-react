import type { Meta, StoryObj } from "@storybook/react-vite";
import MkDateInput from "./MkDateInput.tsx";

const meta = {
  title: "Components/DateInput",
  component: MkDateInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkDateInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {},
};

export const Test: Story = {
  args: {},
};
