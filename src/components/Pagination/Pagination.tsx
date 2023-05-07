import React from "react";
import ChevronLeft from "../Icons/ChevronLeft/ChevronLeft";
import ChevronRight from "../Icons/ChevronRight/ChevronRight";
import {
	StyledPaginationContainer,
	StyledSelector,
	StyledSelectorActive,
} from "./Pagitnation.styles";
const Pagination = () => {
	return (
		<StyledPaginationContainer>
			<ChevronRight />
			<StyledSelectorActive>M</StyledSelectorActive>
			<StyledSelector>T</StyledSelector>
			<StyledSelector>W</StyledSelector>
			<StyledSelector>T</StyledSelector>
			<StyledSelector>F</StyledSelector>
			<StyledSelector>S</StyledSelector>
			<StyledSelector>S</StyledSelector>
			<ChevronLeft />
		</StyledPaginationContainer>
	);
};

export default Pagination;
