import type { Meta, StoryObj } from "@storybook/react-vite";
import MkSectionHeader from "./MkSectionHeader.tsx";
import { MkButton } from "../MkButton";

const meta = {
  title: "Components/SectionHeader",
  component: MkSectionHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkSectionHeader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSectionHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkSectionHeader>
    </div>
  ),
  args: {
    title: "Title",
  },
};

export const TitleWithSubtitleAndChildren: Story = {
  render: (args) => (
    <div className="p-6">
      <MkSectionHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkSectionHeader>
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
      <MkSectionHeader title={args.title} subtitle={args.subtitle}>
        {args.children}
      </MkSectionHeader>
    </div>
  ),
  args: {
    title: "Test",
  },
};
