import React, { useEffect, useState } from "react";
import CardGraph from "../Graph/CardGraph";
import { useTheme } from "styled-components";
import { StyledGraphContainer } from "./GraphComponent.styles";

type Props = {
	userState: string;
};

const GraphComponent = ({ userState }: Props) => {
	const theme: any = useTheme();
	const [user, setUser] = useState<string>("");

	useEffect(() => {
		if (userState === "up") {
			setUser("up");
		} else if (userState === "down") {
			setUser("down");
		}
	}, [userState]);

	return (
		<StyledGraphContainer key={user}>
			<CardGraph theme={theme} user={user} />
		</StyledGraphContainer>
	);
};

export default GraphComponent;
