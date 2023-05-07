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
		"M17.9125 11L19.0875 12.175L15.2709 16L19.0875 19.825L17.9125 21L12.9125 16L17.9125 11Z"
	);

	fill: ${(props) => props.theme.colourIconFill};
`;
