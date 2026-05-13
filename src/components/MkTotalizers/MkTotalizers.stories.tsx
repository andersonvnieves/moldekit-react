import type { Meta, StoryObj } from "@storybook/react-vite";
import MkTotalizers from "./MkTotalizers.tsx";

const meta = {
  title: "Data Display/Totalizers",
  component: MkTotalizers,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkTotalizers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkTotalizers label={args.label} value={args.value}></MkTotalizers>
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
      <MkTotalizers
        label={args.label}
        value={args.value}
        delta={args.delta}
      ></MkTotalizers>
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
      <MkTotalizers label={args.label} value={args.value}></MkTotalizers>
    </div>
  ),
  args: {
    label: "label",
    value: "R$ 1000,00",
  },
};
