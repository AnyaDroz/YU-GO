import type { Preview } from "@storybook/react";
import "../src/index.css";
import { addDecorator } from "@storybook/react";
import { withThemes } from "storybook-addon-themes/react";

addDecorator(withThemes);

const preview: Preview = {
	parameters: {
		themes: {
			default: "light",
			list: [
				{ name: "light", class: "theme-twt", color: "#00aced" },
				{ name: "dark", class: "theme-fb", color: "#3b5998" },
			],
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
