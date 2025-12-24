import type { Meta, StoryObj } from "@storybook/react-vite";
import MkPanel from "./MkPanel.tsx";

const meta = {
  title: "Surfaces/Panel",
  component: MkPanel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: (args) => (
    <div className="p-6">
      <MkPanel className={args.className}>{args.children}</MkPanel>
    </div>
  ),
  args: {
    title: "Panel title",
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border h-48 flex items-center justify-center">
          Card 1
        </div>
        <div className="bg-white p-6 rounded-lg shadow border h-48 flex items-center justify-center">
          Card 2
        </div>
        <div className="bg-white p-6 rounded-lg shadow border h-48 flex items-center justify-center">
          Card 3
        </div>
      </div>
    ),
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkPanel className={args.className}>{args.children}</MkPanel>
    </div>
  ),
  args: {},
};
