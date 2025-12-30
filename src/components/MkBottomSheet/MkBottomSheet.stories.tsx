import type { Meta, StoryObj } from "@storybook/react-vite";
import MkBottomSheet from "./MkBottomSheet.tsx";
import { MkSubHeader } from "../MkSubHeader";

const meta = {
  title: "Components/BottomSheet",
  component: MkBottomSheet,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkBottomSheet>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <>
      <MkSubHeader title={"Modal Title"} subtitle={"Subtitle"} />
      <MkBottomSheet open={args.open}>
        <MkSubHeader title={"Modal Title"} subtitle={"Subtitle"} />
        <div className="w-[350px] h-[600px] flex justify-center items-center">
          <p className={"mk-content"}>Content placeholder</p>
        </div>
      </MkBottomSheet>
    </>
  ),
  args: {
    open: false,
  },
};

export const Test: Story = {
  args: {},
};
