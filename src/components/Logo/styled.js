import styled from "styled-components";

const StyledLogo = styled.div`
  height: 10vw;
  img {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 725px) {
    height: 125px;
    margin-bottom: 1.5rem;
  }
`;

export default StyledLogo;
