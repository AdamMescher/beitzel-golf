import React from "react";
import StyledHeader from "./styled.js";

const Header = () => (
  <StyledHeader>
    <a href="#">
      <img
        src="./assets/logo-crop.svg"
        alt="Brian Beitzel golf instructor logo"
        title="Brian Beitzel Golf"
      />
    </a>
    <nav>
      <ul>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#lessons">lessons</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  </StyledHeader>
);

export default Header;
