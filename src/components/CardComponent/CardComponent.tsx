import React, { useEffect, useState } from "react";
import GraphComponent from "../GraphComponent/GraphComponent";
import ContentInfo from "../ContentInfo/ContentInfo";
import { StyledCardContainer } from "./CardComponent.styles";
type Props = {
	userState: string;
	text: string;
	labelText: string;
	contentParagraph: string;
};

const CardComponent = ({
	userState = "up",
	text = "HEADER",
	labelText = "LABEL",
	contentParagraph = "Lorem ipsum dolor sit amet consectetur. Tortor libero sed nunc ullamcorper. Vulputate sit urna vestibulum fringilla.",
}: Props) => {
	const [user, setUser] = useState<string>("");

	useEffect(() => {
		if (userState === "up") {
			setUser("up");
		} else if (userState === "down") {
			setUser("down");
		}
	}, [userState]);
	return (
		<StyledCardContainer key={user}>
			<GraphComponent userState={user} />
			<ContentInfo
				text={text}
				userState={userState}
				labelText={labelText}
				contentParagraph={contentParagraph}
			/>
		</StyledCardContainer>
	);
};

export default CardComponent;
