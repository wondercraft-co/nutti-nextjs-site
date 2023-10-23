import { Meta, StoryObj } from "@storybook/react";
import FadeInMotionComponent from "./FadeInMotion";

const meta: Meta<typeof FadeInMotionComponent> = {
  component: FadeInMotionComponent,
};

export default meta;
type Story = StoryObj<typeof FadeInMotionComponent>;

export const FadeInMotion: Story = {
  args: {
    // add props here
  },
};
