import type { Meta, StoryObj } from "@storybook/react";
import CardHeader from "./CardHeader";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
	title: "Example/Card Header",
	component: CardHeader,
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
