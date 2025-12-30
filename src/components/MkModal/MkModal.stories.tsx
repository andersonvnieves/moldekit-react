import type { Meta, StoryObj } from "@storybook/react-vite";
import MkModal from "./MkModal.tsx";
import { MkSubHeader } from "../MkSubHeader";

const meta = {
  title: "Components/Modal",
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
  render: (args) => (
    <MkModal open={args.open}>
      <MkSubHeader title={"Modal Title"} subtitle={"Subtitle"} />
      <div className="w-[350px] h-[600px] flex justify-center items-center">
        <p className={"mk-content"}>Content placeholder</p>
      </div>
    </MkModal>
  ),
  args: {
    open: false,
  },
};

export const Test: Story = {
  args: {},
};
