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
  args: {
    title: "Title",
  },
};

export const TitleWithSubtitle: Story = {
  args: {
    title: "Title",
    subtitle: "Suttible",
  },
};

export const TitleWithSubtitleAndChildren: Story = {
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
  args: {},
};
