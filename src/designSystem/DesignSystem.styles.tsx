import styled from "styled-components";

export const StyledH1 = styled.div`
	color: ${(props) => props.theme.primary};
	font-family: ${(props) => props.theme.h1FontFamily};
	font-size: ${(props) => props.theme.h1FontSize};
	font-weight: ${(props) => props.theme.h1FontWeight};
	line-height: ${(props) => props.theme.h1LineHeight};
	text-align: left;
`;
export const StyledH2 = styled.div`
	color: ${(props) => props.theme.primary};
	font-family: ${(props) => props.theme.h2FontFamily};
	font-size: ${(props) => props.theme.h2FontSize};
	font-weight: ${(props) => props.theme.h2FontWeight};
	line-height: ${(props) => props.theme.h2LineHeight};
	text-align: left;
`;

export const StyledLabel = styled.div`
	color: ${(props) => props.theme.primary};
	font-family: ${(props) => props.theme.labelFontFamily};
	font-size: ${(props) => props.theme.labelFontSize};
	font-weight: ${(props) => props.theme.labelFontWeight};
	line-height: ${(props) => props.theme.labelLineHeight};
	text-align: left;
`;
export const StyledSmallLabel = styled.div`
	color: ${(props) => props.theme.primary};
	font-family: ${(props) => props.theme.smallLabelFontFamily};
	font-size: ${(props) => props.theme.smallLabelFontFamily};
	font-weight: ${(props) => props.theme.labelFontWeight};
	line-height: ${(props) => props.theme.labelLineHeight};
	text-align: left;
`;

export const StyledParagraph = styled.div`
	color: ${(props) => props.theme.primary};
	font-family: ${(props) => props.theme.paragraphFontFamily};
	font-size: ${(props) => props.theme.paragraphFontSize};
	font-weight: ${(props) => props.theme.paragraphFontWeight};
	line-height: ${(props) => props.theme.paragraphLineHeight};
	text-align: left;
`;
export const StyledPrimaryColor = styled.div`
	height: 100px;
	width: 100px;
	background-color: ${(props) => props.theme.primary};
`;

export const StyledSecondaryColor = styled.div`
	height: 100px;
	width: 100px;
	background-color: ${(props) => props.theme.secondary};
`;
export const StyledInterfaceDark = styled.div`
	height: 100px;
	width: 100px;
	background-color: ${(props) => props.theme.interfaceDark};
`;

export const StyledInterfaceLight = styled.div`
	height: 100px;
	width: 100px;
	background-color: ${(props) => props.theme.interfaceLight};
`;

export const StyledBackground = styled.div`
	height: 100px;
	width: 100px;
	background-color: ${(props) => props.theme.sky500};
	border: 1px solid ${(props) => props.theme.background};
`;

export const StyledLayerBackground = styled.div`
	height: 100px;
	width: 100px;
	background-color: ${(props) => props.theme.layerBackground};
`;

export const StyledContainer = styled.div`
	background-color: ${(props) => props.theme.background};
	padding: 30px;
`;
