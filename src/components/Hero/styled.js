import styled from "styled-components";

const StyledHero = styled.section`
  width: calc(100% - 8rem);
  padding: 0 4rem 0 4rem;
  margin-top: 3rem;
  .knockout-and-brush-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .hero-copy-container {
    width: 50%;
    margin-top: 3rem;
  }
  p {
    font-size: ${props => props.theme.fontStack.h3FontSize};
    font-family: ${props => props.theme.fontStack.fontFamilyBody};
    line-height: ${props => props.theme.fontStack.bodyLineHeight};
  }
  @media (max-width: 1250px) {
    .hero-copy-container {
      width: 60%;
      margin-top: 2rem;
    }
    p {
      font-size: 2em;
    }
  }
  @media (max-width: 600px) {
    width: calc(100% - 4rem);
    padding: 0 2rem 0 2rem;
    img {
      margin-top: -20px;
    }
    .hero-copy-container {
      width: 70%;
      margin-top: 1rem;
    }
    p {
      font-size: 1.25em;
    }
  }
`;

export default StyledHero;
