import type { Meta, StoryObj } from "@storybook/react-vite";
import MkDeltaIndicator from "./MkDeltaIndicator.tsx";

const meta = {
  title: "Data Display/Delta Indicator",
  component: MkDeltaIndicator,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkDeltaIndicator>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkDeltaIndicator
        value={args.value}
        arrow={args.arrow}
        sentiment={args.sentiment}
      />
    </div>
  ),
  args: {
    value: "8,64%",
    arrow: "up",
    sentiment: "positive",
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkDeltaIndicator
        value={args.value}
        arrow={args.arrow}
        sentiment={args.sentiment}
      />
    </div>
  ),
  args: { value: "8,64%", arrow: "up", sentiment: "positive" },
};
