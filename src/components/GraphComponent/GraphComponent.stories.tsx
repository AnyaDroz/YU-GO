import type { Meta, StoryObj } from "@storybook/react";

import GraphComponent from "./GraphComponent";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
	title: "Example/Graph Component",
	component: GraphComponent,
	argTypes: {
		state: {
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
		state: "up",
		labelText: "CONTENT LABEL",
		contentParagraph:
			"Lorem ipsum dolor sit amet consectetur. Tortor libero sed nunc ullamcorper. Vulputate sit urna vestibulum fringilla.",
	},
};
