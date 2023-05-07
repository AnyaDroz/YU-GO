import styled from "styled-components";

export const StyledTextHeader = styled.div`
	font-family: ${(props) => props.theme.textHeaderTypographyFontFamily};
	font-size: ${(props) => props.theme.textHeaderTypographyFontSize};
	font-weight: ${(props) => props.theme.textHeaderTypographyFontWeight};
	line-height: ${(props) => props.theme.textHeaderTypographyLineHeight};
	color: ${(props) => props.theme.textHeaderFill};
`;

export const StyledCardHeaderContainer = styled.div`
	background-color: ${(props) => props.theme.background};
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const StyledIcon = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
