import type { Preview } from "@storybook/react";
import "../src/index.css";
import ThemeSwitch from "../src/ThemeSwitch/ThemeSwitch";

import { ThemeProvider } from "styled-components";

import { MyThemes } from "../my-theme-folder/my-theme-file";

// Function to obtain the intended theme
const getTheme = (themeName) => {
	return MyThemes[themeName];
};

const withThemeProvider = (Story, context) => {
	const theme = getTheme(context.globals.theme);
	return (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	);
};

const preview: Preview = {
	globalTypes: {
		theme: {
			description: "Global theme for components",
			defaultValue: "light",
			toolbar: {
				title: "Theme",
				icon: "circlehollow",

				items: ["light", "dark"],

				dynamicTitle: true,
			},
		},
		decorators: [withThemeProvider],
	},
	// parameters: {
	// 	actions: { argTypesRegex: "^on[A-Z].*" },
	// 	controls: {
	// 		matchers: {
	// 			color: /(background|color)$/i,
	// 			date: /Date$/,
	// 		},
	// 	},
	// 	themes: {
	// 		default: "light",
	// 		list: [
	// 			{ name: "light", color: "#00aced" },
	// 			{ name: "dark", color: "#00aced" },
	// 		],
	// 		onChange(theme) {
	// 			theme = "dark";
	// 		},
	// 	},
	// },
};

export default preview;
