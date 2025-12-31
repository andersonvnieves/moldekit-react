import type { Meta, StoryObj } from "@storybook/react-vite";
import { MkTopBar } from "./index.ts";
import { MkUserAvatar } from "../MkUserAvatar";

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
    rightMenu: <MkUserAvatar initials={"AV"} />,
    children: <p>Brand</p>,
    onMenuClick: () => {
      alert("Menu button clicked!");
    },
  },
};

export const Test: Story = {
  args: {},
};
