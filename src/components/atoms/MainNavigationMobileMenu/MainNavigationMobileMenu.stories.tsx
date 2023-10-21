import { Meta, StoryObj } from "@storybook/react";
import MainNavigationMobileMenuComponent from "./MainNavigationMobileMenu";

const meta: Meta<typeof MainNavigationMobileMenuComponent> = {
  component: MainNavigationMobileMenuComponent,
};

export default meta;
type Story = StoryObj<typeof MainNavigationMobileMenuComponent>;

export const MainNavigationMobileMenu: Story = {
  args: {
    // add props here
  },
};
