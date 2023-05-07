import { create } from "@storybook/theming/create";
import logoUrl from "./logo.svg";

export default create({
	base: "light",
	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: "monospace",
	brandTitle: "YU-GO",
	brandUrl: "",
	brandImage: logoUrl,
	brandTarget: "_self",

	colorPrimary: "#1C1A6B",
	colorSecondary: "#84CBF2",

	// UI
	appBg: "#F2F5F5",
	appContentBg: "#ffffff",
	appBorderColor: "#585C6D",
	appBorderRadius: 4,

	// Text colors
	textColor: "#1C1A6B",
	textInverseColor: "#ffffff",

	// Toolbar default and active colors
	barTextColor: "#9E9E9E",
	barSelectedColor: "#585C6D",
	barBg: "#ffffff",

	// Form colors
	inputBg: "#ffffff",
	inputBorder: "#10162F",
	inputTextColor: "#10162F",
	inputBorderRadius: 2,
});
