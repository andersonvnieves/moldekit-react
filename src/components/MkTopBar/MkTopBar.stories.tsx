import type { Meta, StoryObj } from "@storybook/react-vite";
import { MkTopBar } from "./index.ts";
import { MkUserAvatar } from "../MkUserAvatar";
import { Menu } from "lucide-react";

const meta = {
  title: "Navigation/TopBar",
  component: MkTopBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkTopBar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    left: (
      <button
        className="w-[45px] h-[45px] flex items-center justify-center transition-colors duration-200 hover:bg-neutral-100 rounded-full"
        aria-label="Menu"
      >
        <Menu size={30} color={"var(--color-neutral-700)"} />
      </button>
    ),
    right: <MkUserAvatar initials={"AV"} />,
    children: <p>Brand</p>,
    hasBorder: true,
  },
};

export const Test: Story = {
  args: {},
};
