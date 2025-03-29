import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent, fn } from "@storybook/test";
import { Post } from "./Post";
const meta = {
  title: "Post",
  component: Post,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Post Title",
    body: "Post Body",
    onDelete: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Post content
    expect(canvas.getByText("Post Title")).toBeInTheDocument();
    expect(canvas.getByText("Post Body")).toBeInTheDocument();

    // Delete button
    const deleteButton = canvas.getByRole("button");
    await userEvent.click(deleteButton);
    expect(args.onDelete).toHaveBeenCalledTimes(1);
  },
};
