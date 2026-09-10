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
        <MkList
          className={args.className}
          data={args.data}
          onClick={(item) => alert(`Clicked on Item: ${item.title}`)}
        />
      </MkCard>
    </div>
  ),
  args: {
    data: [
      {
        id: "1",
        title: "Item 1 with long long long title :)",
        numericValue: "R$ 123,00",
        status: { color: "success", text: "Ok" },
      },
      {
        id: "2",
        title: "Item 2",
        numericValue: "R$ 123,00",
        status: { color: "success", text: "Ok" },
      },
      {
        id: "3",
        title: "Item 3",
        numericValue: "R$ 123,00",
        status: { color: "info", text: "Info" },
      },
      {
        id: "4",
        title: "Item 4",
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
        <MkList
          className={args.className}
          data={args.data}
          onClick={(item) => alert(`Clicked on Item: ${item.title}`)}
        />
      </MkCard>
    </div>
  ),
  args: {
    data: [
      { id: "1", title: "Item 1", numericValue: "123,00" },
      { id: "2", title: "Item 2", numericValue: "123,00" },
    ],
  },
};

export const OnlyTitle: Story = {
  render: (args) => (
    <div className="p-6">
      <MkCard noPadding={true}>
        <MkList
          className={args.className}
          data={args.data}
          onClick={(item) => alert(`Clicked on Item: ${item.title}`)}
        />
      </MkCard>
    </div>
  ),
  args: {
    data: [
      { id: "1", title: "Item 1" },
      { id: "2", title: "Item 2" },
    ],
  },
};

export const NotClickable: Story = {
  render: (args) => (
    <div className="p-6">
      <MkCard noPadding={true}>
        <MkList className={args.className} data={args.data} />
      </MkCard>
    </div>
  ),
  args: {
    data: [
      { id: "1", title: "Item 1" },
      { id: "2", title: "Item 2" },
    ],
  },
};
