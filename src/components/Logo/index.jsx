import React from "react";
import StyledLogo from "./styled";

const Logo = () => (
  <StyledLogo>
    <a href="/">
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons/beitzel-golf-logo.svg`}
        alt="Beitzel Golf logo"
        title="Brian Beitzel Golf"
      />
    </a>
  </StyledLogo>
);

export default Logo;
