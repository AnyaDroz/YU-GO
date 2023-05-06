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
		"M 21 14.3938 L 13.0382 5.54736 L 7.00001 11.5856 L 2.70712 7.29267 L 1.29291 8.70688 L 7.00001 14.414 L 12.9618 8.45218 L 19.7549 16 H 14 V 18 H 23 V 9 H 21 V 14.3938 Z"
	);
	fill: ${(props) => props.theme.colourIconFill};
`;
