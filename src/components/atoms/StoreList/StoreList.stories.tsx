import { Meta, StoryObj } from "@storybook/react";
import StoreListComponent from "./StoreList";

const meta: Meta<typeof StoreListComponent> = {
  component: StoreListComponent,
};

export default meta;
type Story = StoryObj<typeof StoreListComponent>;

export const StoreList: Story = {
  args: {
    // add props here
  },
};
