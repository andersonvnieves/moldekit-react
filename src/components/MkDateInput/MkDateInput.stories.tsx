import type { Meta, StoryObj } from "@storybook/react-vite";
import MkDateInput from "./MkDateInput.tsx";

const meta = {
  title: "Inputs & Controls/DateInput",
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
  render: (args) => (
    <div className="p-6 w-full">
      <MkDateInput
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
      <MkDateInput
        className={args.className}
        placeholder={args.placeholder}
        size={args.size}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {},
};
