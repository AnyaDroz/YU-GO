import type { Meta, StoryObj } from "@storybook/react";

import PageExample from "./PageExample";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
	title: "Example/Page Example",
	component: PageExample,
	argTypes: {
		userState: {
			options: ["up", "down"],
			control: { type: "radio" },
		},
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		userState: "up",
	},
};
