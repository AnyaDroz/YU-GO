import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "./Pagination";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
	title: "Example/Pagination",
	component: Pagination,
	argTypes: {},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
