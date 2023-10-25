import { Meta, StoryObj } from "@storybook/react";
import RecipesListComponent from "./RecipesList";

const meta: Meta<typeof RecipesListComponent> = {
  component: RecipesListComponent,
};

export default meta;
type Story = StoryObj<typeof RecipesListComponent>;

export const RecipesList: Story = {
  args: {
    // add props here
  },
};
