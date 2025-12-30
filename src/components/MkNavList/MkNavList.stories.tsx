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
      <MkNavList data={args.data} collapsed={args.collapsed} />
    </div>
  ),
  args: {
    data: [
      { label: "Home", iconName: "home", link: "http://google.com" },
      {
        label: "Visão Geral",
        iconName: "layout-dashboard",
        link: "http://google.com",
      },
      {
        label: "Recebimentos",
        iconName: "banknote-arrow-down",
        link: "http://google.com",
      },
      {
        label: "Despesas",
        iconName: "banknote-arrow-up",
        link: "http://google.com",
      },
      {
        label: "Investimentos",
        iconName: "piggy-bank",
        link: "http://google.com",
      },
    ],
    collapsed: true,
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkNavList data={args.data} collapsed={args.collapsed} />
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
