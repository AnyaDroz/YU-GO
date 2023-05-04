import type { Meta, Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import "../src/index.css";
import * as Light from "../src/js/LIGHT.js";
import * as Dark from "../src/js/DARK.js";
import React, { useState } from "react";

const getTheme = (themeName) => {
	if (themeName === "Light") {
		return Light;
	} else {
		return Dark;
	}
};

const withThemeProvider = (Story, context) => {
	const theme = getTheme(context.globals.theme);
	// const [theme, setTheme] = useState<any>(LightTheme);
	// const buttonTheme = context.globals.theme;
	console.log(theme);
	return (
		<ThemeProvider theme={{ theme }}>
			<div>hi</div>
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
				// The label to show for this toolbar item
				title: "Theme",
				icon: "circlehollow",
				// Array of plain string values or MenuItem shape (see below)
				items: ["Light", "Dark"],
				// Change title based on selected value
				dynamicTitle: true,
			},
		},
	},
	decorators: [withThemeProvider],
};

export default preview;
