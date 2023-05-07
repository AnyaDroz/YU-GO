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
	userState: string;
};

const CardHeader = ({ text, userState }: Props) => {
	return (
		<div>
			<StyledCardHeaderContainer>
				<StyledTextHeader>{text}</StyledTextHeader>
				{userState === "up" ? <UpArrow /> : <DownArrow />}
			</StyledCardHeaderContainer>
		</div>
	);
};

export default CardHeader;
