import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Pagination from "../components/Pagination/Pagination";
import CardComponent from "../components/CardComponent/CardComponent";
import { StyledH1, StyledPage } from "./PageExample.styles";
const PageExample = () => {
	return (
		<div>
			<TopNavigation />
			<StyledH1>HI RUBY</StyledH1>
			<StyledPage>
				<Pagination />
				<CardComponent
					userState="up"
					text="8,000"
					labelText="TODAY"
					contentParagraph="Lorem ipsum dolor sit amet consectetur. Tortor libero sed nunc ullamcorper. Vulputate sit urna vestibulum fringilla."
				/>
				<CardComponent
					userState="down"
					text="3,000"
					labelText="TRENDING"
					contentParagraph="Lorem ipsum dolor sit amet consectetur. Tortor libero sed nunc ullamcorper. Vulputate sit urna vestibulum fringilla."
				/>
			</StyledPage>
		</div>
	);
};

export default PageExample;
