import React from "react";
import * as LightTheme from "../js/LIGHT";
import { ThemeProvider } from "styled-components";

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
	return (
		<div>
			{/* <ThemeProvider theme={LightTheme}> */}
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
			{/* </ThemeProvider> */}
		</div>
	);
};

export default DesignSystem;
