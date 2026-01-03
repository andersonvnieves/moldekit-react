import type { Meta, StoryObj } from "@storybook/react-vite";
import MkComboBox from "./MkComboBox.tsx";

const meta = {
  title: "Inputs & Controls/ComboBox",
  component: MkComboBox,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkComboBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkComboBox
        className={args.className}
        size={args.size}
        disabled={args.disabled}
        list={args.list}
      />
    </div>
  ),
  args: {
    size: "md",
    disabled: false,
    list: [
      { value: "0", label: "Item1" },
      { value: "1", label: "Item2" },
      { value: "2", label: "Item3" },
    ],
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkComboBox
        className={args.className}
        size={args.size}
        disabled={args.disabled}
        list={args.list}
      />
    </div>
  ),
  args: {
    size: "md",
    disabled: false,
    list: [
      { value: "0", label: "Item1" },
      { value: "1", label: "Item2" },
      { value: "2", label: "Item3" },
    ],
  },
};
