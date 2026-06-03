import type { Meta, StoryObj } from "@storybook/react-vite";
import MkNumberInput from "./MkNumberInput.tsx";

const meta = {
  title: "Inputs & Controls/NumberInput",
  component: MkNumberInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkNumberInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkNumberInput
        className={args.className}
        placeholder={args.placeholder}
        variantSize={args.variantSize}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {
    placeholder: "Text placeholder",
    variantSize: "md",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkNumberInput
        className={args.className}
        placeholder={args.placeholder}
        variantSize={args.variantSize}
        disabled={args.disabled}
      />
    </div>
  ),
  args: {
    placeholder: "Text placeholder",
    variantSize: "md",
    disabled: true,
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkNumberInput
        className={args.className}
        placeholder={args.placeholder}
        variantSize={args.variantSize}
      />
    </div>
  ),
  args: {
    value: "",
    placeholder: "Text placeholder",
    variantSize: "md",
  },
};
