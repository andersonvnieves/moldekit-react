import type { Meta, StoryObj } from "@storybook/react-vite";
import MkTextInput from "./MkTextInput.tsx";

const meta = {
  title: "Inputs & Controls/TextInput",
  component: MkTextInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkTextInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkTextInput
        className={args.className}
        placeholder={args.placeholder}
        size={args.size}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {
    placeholder: "Text placeholder",
    size: "md",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkTextInput
        className={args.className}
        placeholder={args.placeholder}
        size={args.size}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {
    placeholder: "Text placeholder",
    size: "md",
    disabled: true,
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkTextInput className={args.className} placeholder={args.placeholder} />
    </div>
  ),
  args: {
    value: "",
    placeholder: "Text placeholder",
    size: "md",
  },
};
