import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";
import { expect, within, fn, userEvent } from "@storybook/test";

const meta = {
  title: "Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Search",
    placeholder: "Search for a post",
    onSearch: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Label
    const label = canvas.getByText("Search");
    await expect(label).toBeInTheDocument();

    // Placeholder
    const searchInput = canvas.getByPlaceholderText("Search for a post");
    await expect(searchInput).toBeInTheDocument();

    // Search icon
    const iconContainer = canvas.getByTestId("search-icon");
    await expect(iconContainer).toBeInTheDocument();

    // Searching
    await userEvent.type(searchInput, "test query");
    await expect(args.onSearch).toHaveBeenCalledTimes(10);
    await expect(args.onSearch).toHaveBeenLastCalledWith("test query");
  },
};
