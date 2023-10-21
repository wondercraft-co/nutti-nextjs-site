import { Meta, StoryObj } from "@storybook/react";
import StoreLocatorContainerComponent from "./StoreLocatorContainer";

const meta: Meta<typeof StoreLocatorContainerComponent> = {
  component: StoreLocatorContainerComponent,
};

export default meta;
type Story = StoryObj<typeof StoreLocatorContainerComponent>;

export const StoreLocatorContainer: Story = {
  args: {
    // add props here
  },
};
