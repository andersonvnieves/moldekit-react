import type { Meta, StoryObj } from "@storybook/react-vite";
import MkDetailedList from "./MkDetailedList.tsx";

const meta = {
  title: "Data Display/DetailedList",
  component: MkDetailedList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkDetailedList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: (args) => (
    <div className="p-6">
      <MkDetailedList
        className={args.className}
        data={args.data}
        onClick={(item) => alert(`Clicked on Item: ${item.title}`)}
      />
    </div>
  ),
  args: {
    data: [
      {
        id: "1",
        title: "Item 1",
        description: "lorem ipsum",
        numericValue: "R$ 123,00",
        icon: {
          color: "neutral",
          iconName: "home",
        },
      },
      {
        id: "2",
        title: "Item 2",
        description: "lorem ipsum",
        numericValue: "R$ 123,00",
        icon: {
          color: "neutral",
          iconName: "home",
        },
      },
      {
        id: "3",
        title: "Item 3",
        description: "lorem ipsum",
        numericValue: "R$ 123,00",
        icon: {
          color: "neutral",
          iconName: "home",
        },
      },
      {
        id: "4",
        title: "Item 4",
        description: "lorem ipsum",
        numericValue: "R$ 123,00",
        icon: {
          color: "neutral",
          iconName: "home",
        },
      },
    ],
  },
};

export const NoDescription: Story = {
  render: (args) => (
    <div className="p-6">
      <MkDetailedList
        className={args.className}
        data={args.data}
        onClick={(item) => alert(`Clicked on Item: ${item.title}`)}
      />
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
      <MkDetailedList
        className={args.className}
        data={args.data}
        onClick={(item) => alert(`Clicked on Item: ${item.title}`)}
      />
    </div>
  ),
  args: {
    data: [
      { id: "1", title: "Item 1" },
      { id: "2", title: "Item 2" },
    ],
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkDetailedList className={args.className} data={args.data} />
    </div>
  ),
  args: {
    data: [
      { id: "1", title: "Item 1" },
      { id: "2", title: "Item 2" },
    ],
  },
};
