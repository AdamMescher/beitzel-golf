import styled from "styled-components";

const StyledKnockout = styled.div`
  border: 10px solid rgb(99, 95, 95);
  padding: 2rem 0 2rem 2rem;
  width: 8rem;
  display: grid;
  z-index: 2;
  h2 {
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.fontStack.fontFamilyHeader};
    font-size: ${props => props.theme.fontStack.h2FontSize};
    text-transform: uppercase;
    background-color: black;
    color: white;
    white-space: nowrap;
    justify-self: start;
    padding: 1.25rem 2rem 1.25rem 2rem;
    font-weight: ${props => props.theme.fontStack.headerFontWeightHeavy};
    margin: 1rem 0 1rem;
  }
  h2:first-child {
    margin-top: 0.5rem;
  }

  h2:last-child {
    margin-bottom: 0.5rem;
  }
`;

export default StyledKnockout;
