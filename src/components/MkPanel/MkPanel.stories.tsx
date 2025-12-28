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
      <MkPanel className={args.className}>
        <div className="w-full h-[200px] flex justify-center items-center">
          <p className={"mk-content"}>Content placeholder</p>
        </div>
      </MkPanel>
    </div>
  ),
  args: {},
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkPanel className={args.className}>
        <div className="w-full h-[200px] flex justify-center items-center">
          <p className={"mk-content"}>Content placeholder</p>
        </div>
      </MkPanel>
    </div>
  ),
  args: {},
};
