import { Meta, StoryObj } from "@storybook/react";
import RecipeCardComponent from "./RecipeCard";

const meta: Meta<typeof RecipeCardComponent> = {
  component: RecipeCardComponent,
};

export default meta;
type Story = StoryObj<typeof RecipeCardComponent>;

export const RecipeCard: Story = {
  args: {
    // add props here
  },
};
