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
  .hero-copy-text {
    font-size: ${props => props.theme.fontStack.h3FontSize};
    font-family: ${props => props.theme.fontStack.fontFamilyBody};
    line-height: ${props => props.theme.fontStack.bodyLineHeight};
  }
`;

export default StyledHero;
