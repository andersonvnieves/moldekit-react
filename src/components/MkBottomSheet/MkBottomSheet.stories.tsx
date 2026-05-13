import type { Meta, StoryObj } from "@storybook/react-vite";
import MkBottomSheet from "./MkBottomSheet.tsx";
import { MkSubHeader } from "../MkSubHeader";
import { useState } from "react";
import { MkButton } from "../MkButton";

const meta = {
  title: "Surfaces/BottomSheet",
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
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-6">
        <MkButton children="Open BottomSheet" onClick={() => setOpen(true)} />
        <MkBottomSheet
          open={open}
          height={args.height}
          onClose={() => setOpen(false)}
        >
          <MkSubHeader title={"Modal Title"} subtitle={"Subtitle"} />
          <div className="w-[350px] h-[600px] flex justify-center items-center">
            <p className={"mk-content"}>Content placeholder</p>
          </div>
        </MkBottomSheet>
      </div>
    );
  },
  args: {
    height: "lg",
  },
};

export const Test: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-6">
        <MkButton children="Open BottomSheet" onClick={() => setOpen(true)} />
        <MkBottomSheet
          open={open}
          height={args.height}
          onClose={() => setOpen(false)}
        >
          <MkSubHeader title={"Modal Title"} subtitle={"Subtitle"} />
          <div className="w-[350px] h-[600px] flex justify-center items-center">
            <p className={"mk-content"}>Content placeholder</p>
          </div>
        </MkBottomSheet>
      </div>
    );
  },
  args: {
    height: "lg",
  },
};
