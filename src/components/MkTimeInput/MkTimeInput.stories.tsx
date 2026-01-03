import type { Meta, StoryObj } from "@storybook/react-vite";
import MkTimeInput from "./MkTimeInput.tsx";

const meta = {
  title: "Inputs & Controls/TimeInput",
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
  render: (args) => (
    <div className="p-6 w-full">
      <MkTimeInput
        className={args.className}
        placeholder={args.placeholder}
        size={args.size}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {},
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkTimeInput
        className={args.className}
        placeholder={args.placeholder}
        size={args.size}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {},
};
