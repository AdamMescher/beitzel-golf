import styled from "styled-components";

const StyledKnockout = styled.div`
  border: 10px solid rgb(99, 95, 95);
  padding: 2rem 0 2rem 2rem;
  width: 8rem;
  display: grid;
  h2 {
    font-family: ${props => props.theme.fontStack.fontFamilyHeader};
    font-size: ${props => props.theme.fontStack.h2FontSize};
    text-transform: uppercase;
    background-color: black;
    color: white;
    white-space: nowrap;
    justify-self: start;
    padding: 1rem 2rem 1rem 2rem;
    font-weight: ${props => props.theme.fontStack.headerFontWeightHeavy};
    margin: 1rem 0 1rem;
  }
`;

export default StyledKnockout;
