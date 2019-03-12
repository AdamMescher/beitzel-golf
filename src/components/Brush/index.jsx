import React from "react";
import StyledBrush from "./styled";

const Brush = ({ img }) => (
  <StyledBrush>
    <img src={img.src} alt={img.alt} />
  </StyledBrush>
);

export default Brush;
