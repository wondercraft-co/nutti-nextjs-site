import { Meta, StoryObj } from "@storybook/react";
import ProductsGridComponent from "./ProductsGrid";

const meta: Meta<typeof ProductsGridComponent> = {
  component: ProductsGridComponent,
};

export default meta;
type Story = StoryObj<typeof ProductsGridComponent>;

export const ProductsGrid: Story = {
  args: {
    // add props here
  },
};
