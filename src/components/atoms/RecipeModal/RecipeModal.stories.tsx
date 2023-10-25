import { Meta, StoryObj } from "@storybook/react";
import RecipeModalComponent from "./RecipeModal";

const meta: Meta<typeof RecipeModalComponent> = {
  component: RecipeModalComponent,
};

export default meta;
type Story = StoryObj<typeof RecipeModalComponent>;

export const RecipeModal: Story = {
  args: {
    // add props here
  },
};
