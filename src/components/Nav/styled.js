import styled from "styled-components";

const StyledLogo = styled.nav`
  ul {
    display: flex;
    list-style: none;
    align-self: flex-start;
    height: 100%;
  }
  li {
    margin-right: 2.5rem;
  }
  li:last-child {
    margin-right: 0rem;
  }
  a {
    text-decoration: none;
    color: black;
    font-family: "Raleway";
    font-size: 4vw;
    text-transform: uppercase;
  }
  a:hover {
    color: grey;
  }

  @media (max-width: 725px) {
    li {
      font-size: 1.2em;
    }
  }
`;

export default StyledLogo;
