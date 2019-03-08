import React from "react";
import StyledHeader from "./styled.js";

const Header = () => (
  <StyledHeader>
    <a class="hdr-logo-link" href="#">
      <img
        class="hdr-logo"
        src="./assets/logo-crop.svg"
        alt="Brian Beitzel golf instructor logo"
        title="Brian Beitzel Golf"
      />
    </a>
    <nav class="hdr-nav">
      <ul class="hdr-nav-list">
        <li class="hdr-nav-list-item">
          <a class="hdr-nav-list-link" href="#about">
            about
          </a>
        </li>
        <li class="hdr-nav-list-item">
          <a class="hdr-nav-list-link" href="#lessons">
            lessons
          </a>
        </li>
        <li class="hdr-nav-list-item">
          <a class="hdr-nav-list-link" href="#contact">
            contact
          </a>
        </li>
      </ul>
    </nav>
  </StyledHeader>
);

export default Header;
