import type { Meta, StoryObj } from "@storybook/react-vite";
import MkSubHeader from "./MkSubHeader.tsx";
import { MkButton } from "../MkButton";

const meta = {
  title: "Components/Sub Header",
  component: MkSubHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkSubHeader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSubHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkSubHeader>
    </div>
  ),
  args: {
    title: "Title",
  },
};

export const TitleWithSubtitleAndChildren: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSubHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkSubHeader>
    </div>
  ),
  args: {
    title: "Title",
    subtitle: "Suttible",
    children: (
      <div>
        <MkButton>Test</MkButton>
      </div>
    ),
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSubHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkSubHeader>
    </div>
  ),
  args: {
    title: "Test",
  },
};
