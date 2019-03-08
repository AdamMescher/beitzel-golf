import React from "react";
import Logo from "../Logo/index";
import Nav from "../Nav/index";
import StyledHeader from "./styled.js";

const Header = () => (
  <StyledHeader>
    <Logo />
    <Nav />
  </StyledHeader>
);

export default Header;
