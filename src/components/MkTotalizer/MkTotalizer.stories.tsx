import type { Meta, StoryObj } from "@storybook/react-vite";
import MkTotalizer from "./MkTotalizer.tsx";

const meta = {
  title: "Data Display/Totalizer",
  component: MkTotalizer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkTotalizer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkTotalizer label={args.label} value={args.value}></MkTotalizer>
    </div>
  ),
  args: {
    label: "label",
    value: "R$ 1000,00",
  },
};

export const WithDelta: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkTotalizer
        label={args.label}
        value={args.value}
        delta={args.delta}
      ></MkTotalizer>
    </div>
  ),
  args: {
    label: "label",
    value: "R$ 1000,00",
    delta: {
      value: "10%",
      arrow: "up",
      sentiment: "positive",
    },
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkTotalizer label={args.label} value={args.value}></MkTotalizer>
    </div>
  ),
  args: {
    label: "label",
    value: "R$ 1000,00",
  },
};
