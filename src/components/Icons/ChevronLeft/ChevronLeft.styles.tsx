import styled from "styled-components";

export const StyledSvg = styled.svg`
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
`;

export const StyledPath = styled.path`
	fill-rule: evenodd;
	clip-rule: evenodd;
	d: path(
		"M14.0875 11L12.9125 12.175L16.7291 16L12.9125 19.825L14.0875 21L19.0875
			16L14.0875 11Z"
	);

	fill: ${(props) => props.theme.colourIconFill};
`;
