import React from "react";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Pagination from "./components/Pagination/Pagination";
import CardComponent from "./components/CardComponent/CardComponent";
import { StyledH1, StyledPage } from "./Pages/PageExample.styles";
import "./App.css";
import { ThemeProvider } from "styled-components";
import "../src/index.css";
import * as Light from "../src/js/LIGHT.js";

function App() {
	return (
		<div>
			<ThemeProvider theme={Light}>
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
			</ThemeProvider>
		</div>
	);
}

export default App;
