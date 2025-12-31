import type { Meta, StoryObj } from "@storybook/react-vite";
import MkIconBadge from "./MkIconBadge.tsx";

const meta = {
  title: "Data Display/IconBadge",
  component: MkIconBadge,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkIconBadge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: (args) => (
    <div className="p-6">
      <MkIconBadge color={args.color} iconName={args.iconName} />
    </div>
  ),
  args: {
    color: "neutral",
    iconName: "home",
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkIconBadge color={args.color} iconName={args.iconName} />
    </div>
  ),
  args: {
    color: "neutral",
    iconName: "home",
  },
};
