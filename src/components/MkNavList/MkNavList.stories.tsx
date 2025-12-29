import type { Meta, StoryObj } from "@storybook/react-vite";
import MkNavList from "./MkNavList.tsx";

const meta = {
  title: "Components/NavList",
  component: MkNavList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkNavList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkNavList data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "Link1", iconName: "home", link: "http://google.com" },
      { label: "Link2", iconName: "home", link: "http://google.com" },
      { label: "Link3", iconName: "home", link: "http://google.com" },
    ],
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkNavList data={args.data} />
    </div>
  ),
  args: {
    data: [
      { label: "Link1", iconName: "home", link: "http://google.com" },
      { label: "Link2", iconName: "home", link: "http://google.com" },
      { label: "Link3", iconName: "home", link: "http://google.com" },
    ],
  },
};
