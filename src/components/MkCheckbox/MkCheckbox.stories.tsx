import type { Meta, StoryObj } from "@storybook/react-vite";
import MkCheckbox from "./MkCheckbox.tsx";

const meta = {
  title: "Inputs & Controls/Checkbox",
  component: MkCheckbox,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkCheckbox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkCheckbox
        className={args.className}
        label={args.label}
        size={args.size}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {
    label: "Test",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkCheckbox
        className={args.className}
        label={args.label}
        size={args.size}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {
    label: "Test",
    disabled: true,
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkCheckbox
        className={args.className}
        label={args.label}
        size={args.size}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {},
};
