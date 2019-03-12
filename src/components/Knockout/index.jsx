import React from "react";
import StyledKnockout from "./styled";

const Knockout = ({ lines }) => (
  <StyledKnockout>
    {lines.map(line => (
      <h2 key={line}>{line}</h2>
    ))}
  </StyledKnockout>
);

export default Knockout;
