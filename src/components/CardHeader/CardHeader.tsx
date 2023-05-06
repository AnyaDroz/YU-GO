import React, { useState } from "react";
import Icon from "/public/ARROW/LIGHTDOWN.svg";
import {
	StyledTextHeader,
	StyledCardHeaderContainer,
} from "./CardHeader.styles";
import DownArrow from "../Icons/DownArrow/DownArrow";
import UpArrow from "../Icons/UpArrow/UpArrow";
type Props = {
	text: string;
	state: string;
};

const CardHeader = ({ text, state }: Props) => {
	return (
		<div>
			<StyledCardHeaderContainer>
				<StyledTextHeader>{text}</StyledTextHeader>
				{state === "up" ? <UpArrow /> : <DownArrow />}
			</StyledCardHeaderContainer>
		</div>
	);
};

export default CardHeader;
