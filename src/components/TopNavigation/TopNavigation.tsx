import React from "react";
import {
	StyledBurgerMenu,
	StyledNavigationContainer,
} from "./TopNavigation.styles";
import Logo from "../Icons/Logo/Logo";
import BurgerMenu from "../Icons/BurgerMenu/BurgerMenu";

const TopNavigation = () => {
	return (
		<StyledNavigationContainer>
			<Logo />
			<BurgerMenu />
		</StyledNavigationContainer>
	);
};

export default TopNavigation;
