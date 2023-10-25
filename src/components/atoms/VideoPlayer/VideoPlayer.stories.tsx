import { Meta, StoryObj } from "@storybook/react";
import VideoPlayerComponent from "./VideoPlayer";

const meta: Meta<typeof VideoPlayerComponent> = {
  component: VideoPlayerComponent,
};

export default meta;
type Story = StoryObj<typeof VideoPlayerComponent>;

export const VideoPlayer: Story = {
  args: {
    // add props here
  },
};
