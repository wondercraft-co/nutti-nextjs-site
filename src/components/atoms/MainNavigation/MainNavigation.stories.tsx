import { Meta, StoryObj } from "@storybook/react";
import MainNavigationComponent from "./MainNavigation";

const meta: Meta<typeof MainNavigationComponent> = {
  component: MainNavigationComponent,
};

export default meta;
type Story = StoryObj<typeof MainNavigationComponent>;

export const MainNavigation: Story = {
  args: {
    // add props here
  },
};
