import type { Meta, StoryObj } from "@storybook/react";

import CardHeader from "./CardHeader";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
	title: "Example/Card Header",
	component: CardHeader,
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
		text: "CARD HEADER",
		userState: "up",
	},
};
