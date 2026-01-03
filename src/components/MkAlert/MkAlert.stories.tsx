import type { Meta, StoryObj } from "@storybook/react-vite";
import MkAlert from "./MkAlert.tsx";

const meta = {
  title: "Feedback/Alert",
  component: MkAlert,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkAlert>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkAlert className={args.className} label={args.label} />
    </div>
  ),
  args: {
    label: "Test Alert!",
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkAlert className={args.className} label={args.label} />
    </div>
  ),
  args: { label: "Test Alert!" },
};
