import { Meta, StoryObj } from "@storybook/react";
import StoreLocatorMapComponent from "./StoreLocatorMap";

const meta: Meta<typeof StoreLocatorMapComponent> = {
  component: StoreLocatorMapComponent,
};

export default meta;
type Story = StoryObj<typeof StoreLocatorMapComponent>;

export const StoreLocatorMap: Story = {
  args: {
    // add props here
  },
};
