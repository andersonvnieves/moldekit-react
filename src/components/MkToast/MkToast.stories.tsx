import type { Meta, StoryObj } from "@storybook/react-vite";

import MkToastContainer from "./MkToastContainer";
import { mkToastService } from "./MkToast.service";
import { MkButton } from "../MkButton";

const meta = {
  title: "Feedback/Toast",
  component: MkToastContainer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    position: "top-center",
  },
} satisfies Meta<typeof MkToastContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="p-8 h-[500px]">
        <div className="flex flex-col gap-3">
          <MkButton
            color={"success"}
            onClick={() =>
              mkToastService.success("Transaction completed successfully")
            }
          >
            Success
          </MkButton>

          <MkButton
            color={"warning"}
            onClick={() =>
              mkToastService.warning("Your card is about to expire")
            }
          >
            Warning
          </MkButton>

          <MkButton
            color={"danger"}
            onClick={() => mkToastService.danger("Failed to process payment")}
          >
            Danger
          </MkButton>

          <MkButton
            color={"info"}
            onClick={() => mkToastService.info("New update available")}
          >
            Info
          </MkButton>
        </div>

        <MkToastContainer position={args.position} />
      </div>
    );
  },
  args: {
    position: "bottom-center",
  },
};
