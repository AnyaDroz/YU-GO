import styled from "styled-components";

export const StyledPaginationContainer = styled.div`
	background-color: ${(props) => props.theme.background};
	display: flex;
	align-items: center;
	gap: 10px;
	width: 375px;
	justify-content: space-between;
`;

export const StyledSelector = styled.div`
	height: 32px;
	width: 32px;
	display: flex;
	border-radius: 4px;
	align-items: center;
	justify-content: center;
	font-family: ${(props) =>
		props.theme.smallLabelFontFamilyTypographyFontFamily};
	font-size: ${(props) => props.theme.smallLabelTypographyFontSize};
	font-weight: ${(props) => props.theme.smallLabelTypographyFontWeight};
	line-height: ${(props) => props.theme.smallLabelTypographyLineHeight};
	color: ${(props) => props.theme.primary};
`;

export const StyledSelectorActive = styled.div`
	height: 32px;
	width: 32px;
	display: flex;
	border-radius: 4px;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.primary};
	font-family: ${(props) =>
		props.theme.smallLabelFontFamilyTypographyFontFamily};
	font-size: ${(props) => props.theme.smallLabelTypographyFontSize};
	font-weight: ${(props) => props.theme.smallLabelTypographyFontWeight};
	line-height: ${(props) => props.theme.smallLabelTypographyLineHeight};
	color: ${(props) => props.theme.background};
`;
