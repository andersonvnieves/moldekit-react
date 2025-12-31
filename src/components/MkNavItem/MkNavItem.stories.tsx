import type { Meta, StoryObj } from "@storybook/react-vite";
import MkNavItem from "./MkNavItem.tsx";

const meta = {
  title: "Navigation/NavItem",
  component: MkNavItem,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkNavItem>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkNavItem
        label={args.label}
        iconName={args.iconName}
        link={args.link}
        collapsed={args.collapsed}
      />
    </div>
  ),
  args: {
    label: "Home",
    iconName: "home",
    link: "http://google.com",
    collapsed: true,
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkNavItem
        label={args.label}
        iconName={args.iconName}
        link={args.link}
        collapsed={args.collapsed}
      />
    </div>
  ),
  args: {
    label: "Home",
    iconName: "home",
    link: "http://google.com",
    collapsed: true,
  },
};
