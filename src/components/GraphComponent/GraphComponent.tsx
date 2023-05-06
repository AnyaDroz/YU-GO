import React from "react";
import CardGraph from "../Graph/CardGraph";
import { useTheme } from "styled-components";
import { StyledGraphContainer } from "./GraphComponent.styles";

type Props = {
	state: string;
};

const GraphComponent = ({ state }: Props) => {
	const theme: any = useTheme();

	return (
		<StyledGraphContainer>
			<CardGraph theme={theme} state={state} />
		</StyledGraphContainer>
	);
};

export default GraphComponent;
