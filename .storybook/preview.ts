import type { Preview } from "@storybook/react";
import "../src/index.css";

import { withThemes } from "storybook-addon-themes/react"; // <- or your storybook framework

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		themes: {
			default: "light",
			list: [
				{ name: "light", theme: ["light"], color: "#00aced" },
				{ name: "dark", theme: ["dark"], color: "#00aced" },
			],
		},
	},
};

export default preview;
