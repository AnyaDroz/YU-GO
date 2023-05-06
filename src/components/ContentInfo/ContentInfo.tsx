import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import {
	StyledCardParagraph,
	StyledContentInfoContainer,
	StyledContentLabel,
} from "./ContentInfo.styles";

type Props = {
	labelText: string;
	text: string;
	state: string;
	contentParagraph: string;
};
const ContentInfo = ({ labelText, text, state, contentParagraph }: Props) => {
	return (
		<StyledContentInfoContainer>
			<StyledContentLabel>{labelText}</StyledContentLabel>
			<CardHeader text={text} state={state} />
			<StyledCardParagraph>{contentParagraph}</StyledCardParagraph>
		</StyledContentInfoContainer>
	);
};

export default ContentInfo;
