import type { Meta, StoryObj } from "@storybook/react-vite";
import MkMain from "./MkMain.tsx";
import { MkCard } from "../MkCard";
import { MkPanel } from "../MkPanel";
import { MkDivider } from "../MkDivider";
import { MkButton } from "../MkButton";
import { MkHeader } from "../MkHeader";

const meta = {
  title: "Surfaces/Main",
  component: MkMain,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MkMain>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: (args) => (
    <div className="p-6">
      <MkMain className={args.className}>{args.children}</MkMain>
    </div>
  ),
  args: {
    children: (
      <div className="space-y-4">
        <MkHeader title={"Inicio"} subtitle={"Dezembro de 2025"}>
          <div className={"inline-flex"}>
            <MkButton
              iconName={"chevron-left"}
              iconOnly={true}
              color={"neutral"}
            ></MkButton>
            <MkButton
              iconName={"chevron-right"}
              iconOnly={true}
              color={"neutral"}
            ></MkButton>
          </div>
        </MkHeader>
        <MkDivider></MkDivider>
        <MkPanel title={"Main Content Area"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MkCard className="h-48 flex items-center justify-center">
              <h3>Card1</h3>
              <MkDivider />
              <p>
                This main container fills its parent width and height. Cards and
                other components will render here.
              </p>
              <MkDivider />
              <div>
                <MkButton>Cancelar</MkButton>
              </div>
            </MkCard>

            <MkCard className="h-48 flex items-center justify-center">
              <h3>Card2</h3>
              <MkDivider />
              <p>
                This main container fills its parent width and height. Cards and
                other components will render here.
              </p>
              <MkDivider />
              <div>
                <MkButton>Cancelar</MkButton>
              </div>
            </MkCard>

            <MkCard className="h-48 flex items-center justify-center">
              <h3>Card3</h3>
              <MkDivider />
              <p>
                This main container fills its parent width and height. Cards and
                other components will render here.
              </p>
              <MkDivider />
              <div>
                <MkButton>Cancelar</MkButton>
              </div>
            </MkCard>
          </div>
        </MkPanel>
      </div>
    ),
  },
};

export const Test: Story = {
  render: (args) => (
    <div className="p-6">
      <MkMain className={args.className}>{args.children}</MkMain>
    </div>
  ),
  args: {},
};
