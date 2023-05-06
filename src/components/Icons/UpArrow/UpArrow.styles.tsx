import styled from "styled-components";

export const StyledSvg = styled.svg`
    width: 24px;
	height: 24px;
	xmlns: http://www.w3.org/2000/svg;
    `;

export const StyledPath = styled.path`
	fill-rule: evenodd;
	clip-rule: evenodd;
	d: path(
		"M 23 6 H 14 V 8 H 19.7547 L 12.9618 15.5476 L 7 9.58581 L 1.29289 15.2929 L 2.70711 16.7071 L 7 12.4142 L 13.0382 18.4524 L 21 9.60599 V 15 H 23 V 6 Z"
	);
	fill: ${(props) => props.theme.colourIconFill};
`;
