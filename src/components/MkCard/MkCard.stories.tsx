import type { Meta, StoryObj } from "@storybook/react-vite";
import MkCard from "./MkCard.tsx";

const meta = {
  title: "Surfaces/Card",
  component: MkCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: (args) => (
    <div className="p-6">
      <MkCard className={args.className}>{args.children}</MkCard>
    </div>
  ),
  args: {
    children: (
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">Main Content Area</h1>
        <p className="text-gray-600">
          This main container fills its parent width and height. Cards and other
          components will render here.
        </p>
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
      </div>
    ),
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkCard className={args.className}>{args.children}</MkCard>
    </div>
  ),
  args: {},
};
