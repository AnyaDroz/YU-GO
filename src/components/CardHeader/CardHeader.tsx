import React from "react";
import { StyledTextHeader } from "./CardHeader.styles";
type Props = {
	children: string;
};

const CardHeader = ({ children }: Props) => {
	return (
		<div>
			<StyledTextHeader>{children}</StyledTextHeader>
		</div>
	);
};

export default CardHeader;
