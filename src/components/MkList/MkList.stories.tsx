import type { Meta, StoryObj } from "@storybook/react-vite";
import MkList from "./MkList.tsx";
import { MkCard } from "../MkCard";

const meta = {
  title: "Data Display/List",
  component: MkList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: (args) => (
    <div className="p-6">
      <MkCard noPadding={true}>
        <MkList className={args.className} data={args.data} />
      </MkCard>
    </div>
  ),
  args: {
    data: [
      {
        title: "Item 1",
        description: "lorem ipsum",
        numericValue: "R$ 123,00",
        status: { color: "success", text: "Ok" },
      },
      {
        title: "Item 2",
        description: "lorem ipsum",
        numericValue: "R$ 123,00",
        status: { color: "success", text: "Ok" },
      },
      {
        title: "Item 3",
        description: "lorem ipsum",
        numericValue: "R$ 123,00",
        status: { color: "info", text: "Info" },
      },
      {
        title: "Item 4",
        description: "lorem ipsum",
        numericValue: "R$ 123,00",
        status: { color: "danger", text: "Error" },
      },
    ],
  },
};

export const NoDescription: Story = {
  render: (args) => (
    <div className="p-6">
      <MkCard noPadding={true}>
        <MkList className={args.className} data={args.data} />
      </MkCard>
    </div>
  ),
  args: {
    data: [
      { title: "Item 1", numericValue: "123,00" },
      { title: "Item 2", numericValue: "123,00" },
    ],
  },
};

export const OnlyTitle: Story = {
  render: (args) => (
    <div className="p-6">
      <MkCard noPadding={true}>
        <MkList className={args.className} data={args.data} />
      </MkCard>
    </div>
  ),
  args: {
    data: [{ title: "Item 1" }, { title: "Item 2" }],
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkCard noPadding={true}>
        <MkList className={args.className} data={args.data} />
      </MkCard>
    </div>
  ),
  args: { data: [{ title: "Item 1" }, { title: "Item 2" }] },
};
