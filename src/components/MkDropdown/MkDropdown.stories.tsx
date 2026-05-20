import type { Meta, StoryObj } from "@storybook/react-vite";
import MkDropdown from "./MkDropdown.tsx";
import { MkTopBar } from "../MkTopBar";
import { MkButton } from "../MkButton";

const meta = {
  title: "Surfaces/Dropdown",
  component: MkDropdown,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MkDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="min-h-screen bg-white">
        <MkTopBar
          left={<h1 className="mk-section-title">TopBar</h1>}
          right={
            <MkDropdown
              className={"mt-[18px]"}
              {...args}
              trigger={
                <MkButton
                  variant={"transparent"}
                  iconName={"menu"}
                  iconOnly={true}
                  size={"lg"}
                />
              }
            >
              <nav className="flex flex-col p-2">
                <button
                  onClick={() => alert("Dashboard")}
                  className="rounded-xl px-4 py-3 text-left transition-colors hover:bg-neutral-100"
                >
                  Dashboard
                </button>

                <button
                  onClick={() => alert("Transactions")}
                  className="rounded-xl px-4 py-3 text-left transition-colors hover:bg-neutral-100"
                >
                  Transactions
                </button>

                <button
                  onClick={() => alert("Investments")}
                  className="rounded-xl px-4 py-3 text-left transition-colors hover:bg-neutral-100"
                >
                  Investments
                </button>

                <button
                  onClick={() => alert("Settings")}
                  className="rounded-xl px-4 py-3 text-left transition-colors hover:bg-neutral-100"
                >
                  Settings
                </button>
              </nav>
            </MkDropdown>
          }
          hasBorder={true}
        ></MkTopBar>
      </div>
    );
  },
};
