import type { Meta, StoryObj } from "@storybook/react";

import DesignSystem from "./DesignSystem";

const meta: Meta = {
	title: "Design System",
	component: DesignSystem,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
