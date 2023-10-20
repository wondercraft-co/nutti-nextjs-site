import { Meta, StoryObj } from "@storybook/react";
import ProductTileComponent from "./ProductTile";

const meta: Meta<typeof ProductTileComponent> = {
  component: ProductTileComponent,
};

export default meta;
type Story = StoryObj<typeof ProductTileComponent>;

export const ProductTile: Story = {
  args: {
    // add props here
  },
};
