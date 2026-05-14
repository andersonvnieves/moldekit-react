import type { Meta, StoryObj } from "@storybook/react-vite";
import { MkSkeleton, type MkSkeletonProps } from "./index.ts";

const meta = {
  title: "Surfaces/Skeleton",
  component: MkSkeleton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
  } satisfies MkSkeletonProps,
} satisfies Meta<typeof MkSkeleton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Square: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSkeleton className={"w-32 h-32 rounded-md"} />
    </div>
  ),
  args: {},
};

export const Circle: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSkeleton className={"w-32 h-32 rounded-full"} />
    </div>
  ),
  args: {},
};

export const rectangle: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSkeleton className={"w-32 h-5 rounded-md"} />
    </div>
  ),
  args: {},
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSkeleton className={"w-32 h-32 rounded-md"} />
    </div>
  ),
  args: {},
};
