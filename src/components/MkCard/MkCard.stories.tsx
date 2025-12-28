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
      <MkCard className={args.className}>
        <div className="w-full h-[200px] flex justify-center items-center">
          <p className={"mk-content"}>Content placeholder</p>
        </div>
      </MkCard>
    </div>
  ),
  args: {},
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkCard className={args.className}>
        <div className="w-full h-[200px] flex justify-center items-center">
          <p className={"mk-content"}>Content placeholder</p>
        </div>
      </MkCard>
    </div>
  ),
  args: {},
};
