import type { Meta, StoryObj } from "@storybook/react-vite";
import MkRadioButton from "./MkRadioButton.tsx";

const meta = {
  title: "Inputs & Controls/RadioButton",
  component: MkRadioButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkRadioButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkRadioButton
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
    size: "sm",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkRadioButton
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
    size: "sm",
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkRadioButton
        className={args.className}
        label={args.label}
        size={args.size}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {},
};
