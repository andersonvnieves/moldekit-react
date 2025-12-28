import type { Meta, StoryObj } from "@storybook/react-vite";
import MkMain from "./MkMain.tsx";

const meta = {
  title: "Surfaces/Main",
  component: MkMain,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkMain>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: (args) => (
    <div className="p-6 w-full">
      <MkMain className={args.className}>
        <div className="w-full h-[200px] flex justify-center items-center">
          <p className={"mk-content"}>Content placeholder</p>
        </div>
      </MkMain>
    </div>
  ),
  args: {},
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkMain className={args.className}>
        <div className="w-full h-[200px] flex justify-center items-center">
          <p className={"mk-content"}>Content placeholder</p>
        </div>
      </MkMain>
    </div>
  ),
  args: {},
};
