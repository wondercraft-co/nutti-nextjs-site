import { Meta, StoryObj } from "@storybook/react";
import RecipeListContainerComponent from "./RecipeListContainer";

const meta: Meta<typeof RecipeListContainerComponent> = {
  component: RecipeListContainerComponent,
};

export default meta;
type Story = StoryObj<typeof RecipeListContainerComponent>;

export const RecipeListContainer: Story = {
  args: {
    // add props here
  },
};
