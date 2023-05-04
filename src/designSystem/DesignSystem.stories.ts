import type { Meta, StoryObj } from "@storybook/react";
import { string } from "prop-types";

import DesignSystem from "./DesignSystem";

const meta: Meta = {
	title: "Design System",
	component: DesignSystem,
	argTypes: {
		theme: string,
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		theme: "light",
	},
};
