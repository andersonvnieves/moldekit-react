import type { Meta, StoryObj } from "@storybook/react-vite";
import MkUserAvatar from "./MkUserAvatar.tsx";

const meta = {
  title: "Components/User Avatar",
  component: MkUserAvatar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkUserAvatar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  render: (args) => (
    <div className="p-6">
      <MkUserAvatar initials={args.initials} />
    </div>
  ),
  args: {
    initials: "AN",
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkUserAvatar initials={args.initials} />
    </div>
  ),
  args: {
    initials: "AN",
  },
};
