import type { Meta, StoryObj } from "@storybook/react-vite";

import MkAlertContainer from "./MkAlertContainer";
import { mkAlertService } from "./MkAlert.service";
import { MkButton } from "../MkButton";

const meta = {
  title: "Feedback/Alert",
  component: MkAlertContainer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MkAlertContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    return (
      <div className="p-8">
        <div className="flex gap-3">
          <MkButton
            color={"success"}
            onClick={() =>
              mkAlertService.success("Transaction completed successfully")
            }
          >
            Success
          </MkButton>

          <MkButton
            color={"warning"}
            onClick={() =>
              mkAlertService.warning("Your card is about to expire")
            }
          >
            Warning
          </MkButton>

          <MkButton
            color={"danger"}
            onClick={() => mkAlertService.danger("Failed to process payment")}
          >
            Danger
          </MkButton>

          <MkButton
            color={"info"}
            onClick={() => mkAlertService.info("New update available")}
          >
            Info
          </MkButton>
        </div>

        <MkAlertContainer />
      </div>
    );
  },
};
