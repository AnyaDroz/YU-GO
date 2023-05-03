import React from "react";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useState } from "react";

import {
	StyledH1,
	StyledH2,
	StyledLabel,
	StyledSmallLabel,
	StyledInterfaceDark,
	StyledParagraph,
	StyledPrimaryColor,
	StyledSecondaryColor,
	StyledLayerBackground,
	StyledInterfaceLight,
	StyledBackground,
	StyledContainer,
} from "./DesignSystem.styles";

const DesignSystem = () => {
	const [theme, setTheme] = useState<string>("light");
	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else if (theme === "dark") {
			setTheme("light");
		}
	};
	return (
		<div>
			<button onClick={toggleTheme}>CLICK ME</button>
			<ThemeSwitch theme={theme}>
				<StyledContainer>
					<StyledH1>H1</StyledH1>
					<StyledH2>H2</StyledH2>
					<StyledLabel>LABEL</StyledLabel>
					<StyledSmallLabel>SMALL LABEL</StyledSmallLabel>
					<StyledParagraph>Paragraph</StyledParagraph>
					<StyledPrimaryColor />
					<StyledSecondaryColor />
					<StyledInterfaceDark />
					<StyledInterfaceLight />
					<StyledLayerBackground />
					<StyledBackground />
				</StyledContainer>
			</ThemeSwitch>
		</div>
	);
};

export default DesignSystem;
