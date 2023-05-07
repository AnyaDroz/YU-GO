import styled from "styled-components";

export const StyledH1 = styled.div`
	color: ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.background};
	font-family: ${(props) => props.theme.h1FontFamily};
	font-size: ${(props) => props.theme.h1FontSize};
	font-weight: ${(props) => props.theme.h1FontWeight};
	line-height: ${(props) => props.theme.h1LineHeight};
	text-align: left;
	display: flex;
	justify-content: left;
	align-items: left;
	padding-left: 12px;
	width: 363px;
	padding-top: 20px;
	padding-bottom: 20px;
`;

export const StyledPage = styled.div`
	background-color: ${(props) => props.theme.background};
	width: 375px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding-bottom: 48px;
`;
