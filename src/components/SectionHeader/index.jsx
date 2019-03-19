import React from "react";
import StyledSectionHeader from "./styled";

const SectionHeader = ({ title }) => (
  <StyledSectionHeader>
    <h3>{title}}</h3>
  </StyledSectionHeader>
);

export default SectionHeader;
