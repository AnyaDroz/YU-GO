import styled from "styled-components";

export const StyledSvg = styled.svg`
	width: 24px;
	height: 24px;
`;

export const StyledPath = styled.path`
	fill-rule: evenodd;
	clip-rule: evenodd;
	d: path(
		"M 4 15 H 20 V 13 H 4 V 15 Z M 4 19 H 20 V 17 H 4 V 19 Z M 4 11 H 20 V 9 H 4 V 11 Z M 4 5 V 7 H 20 V 5 H 4 Z"
	);

	fill: ${(props) => props.theme.colourIconFill};
`;
