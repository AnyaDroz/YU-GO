import styled from "styled-components";
import "../build/css/LIGHT.css";

export const StyledH1 = styled.div`
	color: var(--primary);
	font-family: var(--h1-font-family);
	font-size: var(--h1-font-size);
	font-weight: var(--h1-font-weight);
	line-height: var(--h1-line-height);
	text-align: left;
`;
export const StyledH2 = styled.div`
	color: var(--primary);
	font-family: var(--h2-font-family);
	font-size: var(--h2-font-size);
	font-weight: var(--h2-font-weight);
	line-height: var(--h2-line-height);
	text-align: left;
`;

export const StyledLabel = styled.div`
	color: var(--primary);
	font-family: var(--label-font-family);
	font-size: var(--label-font-size);
	font-weight: var(--label-font-weight);
	line-height: var(--label-font-height);
	text-align: left;
`;
export const StyledSmallLabel = styled.div`
	color: var(--primary);
	font-family: var(--small-label-font-family);
	font-size: var(--small-label-font-size);
	font-weight: var(--small-label-font-weight);
	line-height: var(--small-label-font-height);
	text-align: left;
`;

export const StyledParagraph = styled.div`
	color: var(--primary);
	font-family: var(--small-label-family);
	font-size: var(--small-label-size);
	font-weight: var(--small-label-weight);
	line-height: var(--small-label-height);
	text-align: left;
`;
export const StyledPrimaryColor = styled.div`
	height: 100px;
	width: 100px;
	background-color: var(--primary);
`;

export const StyledSecondaryColor = styled.div`
	height: 100px;
	width: 100px;
	background-color: var(--secondary);
`;
export const StyledInterfaceDark = styled.div`
	height: 100px;
	width: 100px;
	background-color: var(--interface-dark);
`;

export const StyledInterfaceLight = styled.div`
	height: 100px;
	width: 100px;
	background-color: var(--interface-light);
`;

export const StyledBackground = styled.div`
	height: 100px;
	width: 100px;
	background-color: var(--background);
	border: 1px solid var(--primary);
`;

export const StyledLayerBackground = styled.div`
	height: 100px;
	width: 100px;
	background-color: var(--layer-background);
`;

export const StyledContainer = styled.div`
	background-color: var(--background);
	padding: 30px;
`;
