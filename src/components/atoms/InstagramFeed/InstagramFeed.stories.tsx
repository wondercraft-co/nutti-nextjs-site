import { Meta, StoryObj } from "@storybook/react";
import InstagramFeedComponent from "./InstagramFeed";

const meta: Meta<typeof InstagramFeedComponent> = {
  component: InstagramFeedComponent,
};

export default meta;
type Story = StoryObj<typeof InstagramFeedComponent>;

export const InstagramFeed: Story = {
  args: {
    // add props here
  },
};
