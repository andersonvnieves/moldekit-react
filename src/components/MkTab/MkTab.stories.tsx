import type { Meta, StoryObj } from "@storybook/react-vite";
import MkTab from "./MkTab.tsx";

const meta = {
  title: "Components/Tab",
  component: MkTab,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkTab>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkTab
        data={args.data}
        onTabSelect={args.onTabSelect}
        selectedTab={args.selectedTab}
      />
    </div>
  ),
  args: {
    data: ["Tab1", "Tab2", "Tab3"],
    onTabSelect: (i) => alert(i),
    selectedTab: 1,
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkTab data={args.data} />
    </div>
  ),
  args: {
    data: ["Tab1", "Tab2", "Tab3"],
  },
};
