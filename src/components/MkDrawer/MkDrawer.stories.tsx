import type { Meta, StoryObj } from "@storybook/react-vite";
import { MkDrawer, type MkDrawerProps } from "./index.ts";
import { MkButton } from "../MkButton";
import { useState } from "react";

const meta = {
  title: "Surfaces/Drawer",
  component: MkDrawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {} satisfies MkDrawerProps,
} satisfies Meta<typeof MkDrawer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Left: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-6">
        <MkButton onClick={() => setOpen(true)}>Open</MkButton>
        <MkDrawer
          position={args.position}
          open={open}
          onClose={() => setOpen(false)}
        >
          <h3 className={"mk-section-title"}>Inside Drawer</h3>
          <MkButton onClick={() => setOpen(false)}>Close</MkButton>
        </MkDrawer>
      </div>
    );
  },
  args: {
    position: "left",
  },
};

export const Right: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-6">
        <MkButton onClick={() => setOpen(true)}>Open</MkButton>
        <MkDrawer
          position={args.position}
          open={open}
          onClose={() => setOpen(false)}
        >
          <h3 className={"mk-section-title"}>Inside Drawer</h3>
          <MkButton onClick={() => setOpen(false)}>Close</MkButton>
        </MkDrawer>
      </div>
    );
  },
  args: {
    position: "right",
  },
};
