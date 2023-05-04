import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import "../src/index.css";
import * as Light from "../src/js/LIGHT.js";
import * as Dark from "../src/js/DARK.js";
import React from "react";

const getTheme = (themeName) => {
	if (themeName === "Light") {
		return Light;
	} else {
		return Dark;
	}
};

const withThemeProvider = (Story, context) => {
	const theme = getTheme(context.globals.theme);
	console.log(theme);
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
				items: ["Light", "Dark"],
				dynamicTitle: true,
			},
		},
	},
	decorators: [withThemeProvider],
};

export default preview;
