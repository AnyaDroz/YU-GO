import styled from "styled-components";

export const StyledContentInfoContainer = styled.div`
	background-color: ${(props) => props.theme.background};
	width: 350px;
`;
export const StyledContentLabel = styled.div`
	margin-bottom: 2px;
	font-family: ${(props) => props.theme.textLabelTypographyFontFamily};
	font-size: ${(props) => props.theme.textLabelTypographyFontSize};
	font-weight: ${(props) => props.theme.textLabelTypographyFontWeight};
	line-height: ${(props) => props.theme.textLabelTypographyLineHeight};
	color: ${(props) => props.theme.textLabelFill};
`;
export const StyledCardParagraph = styled.div`
	margin-top: 2px;
	font-family: ${(props) => props.theme.textParagraphTypographyFontFamily};
	font-size: ${(props) => props.theme.textParagraphTypographyFontSize};
	font-weight: ${(props) => props.theme.textParagraphTypographyFontWeight};
	line-height: ${(props) => props.theme.textParagraphTypographyLineHeight};
	color: ${(props) => props.theme.textParagraphFill};
`;
