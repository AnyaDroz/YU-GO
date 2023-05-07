import React from "react";
import CardHeader from "../CardHeader/CardHeader";

import GraphComponent from "../GraphComponent/GraphComponent";
import ContentInfo from "../ContentInfo/ContentInfo";
const CardComponent = () => {
	return (
		<div>
			<GraphComponent userState={"up"} />
			<ContentInfo
				text={"CARD HEADER"}
				userState={"up"}
				labelText="LABEL"
				contentParagraph="Lorem ipsum dolor sit amet consectetur. Tortor libero sed nunc ullamcorper. Vulputate sit urna vestibulum fringilla."
			/>
		</div>
	);
};

export default CardComponent;
