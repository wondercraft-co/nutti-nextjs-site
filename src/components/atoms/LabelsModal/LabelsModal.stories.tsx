import { Meta, StoryObj } from "@storybook/react";
import LabelsModalComponent from "./LabelsModal";

const meta: Meta<typeof LabelsModalComponent> = {
  component: LabelsModalComponent,
};

export default meta;
type Story = StoryObj<typeof LabelsModalComponent>;

export const LabelsModal: Story = {
  args: {
    // add props here
  },
};
