import type { Meta, StoryObj } from "@storybook/react";

import TopNavigation from "./TopNavigation";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
	title: "Example/Top Navigation",
	component: TopNavigation,
	argTypes: {},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: "CARD HEADER",
		userState: "up",
	},
};
