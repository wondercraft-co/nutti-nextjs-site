import { Meta, StoryObj } from "@storybook/react";
import ProductTileDecorComponent from "./ProductTileDecor";

const meta: Meta<typeof ProductTileDecorComponent> = {
  component: ProductTileDecorComponent,
};

export default meta;
type Story = StoryObj<typeof ProductTileDecorComponent>;

export const ProductTileDecor: Story = {
  args: {
    // add props here
  },
};
