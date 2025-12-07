import type { Meta, StoryObj } from "@storybook/react-vite";
import MkButton from "./MkButton.tsx";

const meta = {
  title: "Controls/MkButton",
  component: MkButton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    variant: "filled",
    color: "primary",
    size: "medium",
    children: "Button",
    disabled: false,
  },
} satisfies Meta<typeof MkButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "filled",
    color: "primary",
    children: "Button",
    size: "medium",
  },
};

export const Neutral: Story = {
  args: {
    variant: "filled",
    color: "neutral",
    children: "Button",
    size: "medium",
  },
};

export const Success: Story = {
  args: {
    variant: "filled",
    color: "success",
    children: "Button",
    size: "medium",
  },
};

export const Info: Story = {
  args: {
    variant: "filled",
    color: "info",
    children: "Button",
    size: "medium",
  },
};

export const Danger: Story = {
  args: {
    variant: "filled",
    color: "danger",
    children: "Button",
    size: "medium",
  },
};

export const Warning: Story = {
  args: {
    variant: "filled",
    color: "warning",
    children: "Button",
    size: "medium",
  },
};

export const Icon: Story = {
  args: {
    variant: "filled",
    color: "neutral",
    children: "Home",
    size: "medium",
    iconOnly: true,
    iconName: "home",
    "aria-label": "Home",
  },
};

export const Test: Story = {
  args: {
    variant: "filled",
    color: "neutral",
    size: "medium",
  },
};
