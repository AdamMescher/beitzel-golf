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
    font-size: ${props => props.theme.fontStack.h2FontSize};
    text-transform: uppercase;
  }
  a:hover {
    color: grey;
  }

  @media (max-width: 1250px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 900px) {
    margin-top: 0.75rem;
    li {
      font-size: 0.5em;
    }
  }

  @media (max-width: 500px) {
    li {
      font-size: 0.4em;
    }
  }
`;

export default StyledLogo;
