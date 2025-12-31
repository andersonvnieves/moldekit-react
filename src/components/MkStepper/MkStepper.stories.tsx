import type { Meta, StoryObj } from "@storybook/react-vite";
import MkStepper from "./MkStepper.tsx";

const meta = {
  title: "Navigation/Stepper",
  component: MkStepper,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkStepper>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  render: (args) => (
    <div className="p-6">
      <MkStepper steps={args.steps} currentStep={args.currentStep} />
    </div>
  ),
  args: {
    steps: 4,
    currentStep: 2,
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkStepper steps={args.steps} currentStep={args.currentStep} />
    </div>
  ),
  args: {
    steps: 4,
    currentStep: 2,
  },
};
