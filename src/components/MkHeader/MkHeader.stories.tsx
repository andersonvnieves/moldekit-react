import type { Meta, StoryObj } from "@storybook/react-vite";
import MkHeader from "./MkHeader.tsx";
import { MkButton } from "../MkButton";

const meta = {
  title: "Components/Header",
  component: MkHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkHeader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkHeader>
    </div>
  ),
  args: {
    title: "Title",
  },
};

export const TitleWithSubtitle: Story = {
  render: (args) => (
    <div className="p-6">
      <MkHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkHeader>
    </div>
  ),
  args: {
    title: "Title",
    subtitle: "Subtitle",
  },
};

export const TitleWithSubtitleAndChildren: Story = {
  render: (args) => (
    <div className="p-6">
      <MkHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkHeader>
    </div>
  ),
  args: {
    title: "Title",
    subtitle: "Subtitle",
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
      <MkHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkHeader>
    </div>
  ),
  args: {
    title: "Test",
  },
};
