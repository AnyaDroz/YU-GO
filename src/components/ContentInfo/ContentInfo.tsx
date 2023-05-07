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
	userState: string;
	contentParagraph: string;
};
const ContentInfo = ({
	labelText,
	text,
	userState,
	contentParagraph,
}: Props) => {
	return (
		<StyledContentInfoContainer>
			<StyledContentLabel>{labelText}</StyledContentLabel>
			<CardHeader text={text} userState={userState} />
			<StyledCardParagraph>{contentParagraph}</StyledCardParagraph>
		</StyledContentInfoContainer>
	);
};

export default ContentInfo;
