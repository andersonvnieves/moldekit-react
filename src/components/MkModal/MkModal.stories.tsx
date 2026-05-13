import type { Meta, StoryObj } from "@storybook/react-vite";
import MkModal from "./MkModal.tsx";
import { MkSubHeader } from "../MkSubHeader";
import { useState } from "react";
import { MkButton } from "../MkButton";

const meta = {
  title: "Surfaces/Modal",
  component: MkModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-6">
        <MkButton children="Open Modal" onClick={() => setOpen(true)} />
        <MkModal open={open} onClose={() => setOpen(false)}>
          <MkSubHeader title="Modal Title" subtitle="Subtitle" />

          <div className="w-[350px] h-[600px] flex justify-center items-center">
            <p className="mk-content">Content placeholder</p>
          </div>
        </MkModal>
      </div>
    );
  },
  args: {
    open: false,
  },
};

export const Test: Story = {
  args: {},
};
