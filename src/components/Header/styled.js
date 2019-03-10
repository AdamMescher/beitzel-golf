import styled from "styled-components";

const StyledHeader = styled.header`
  width: calc(100% - 6rem);
  padding: 3rem 3rem 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;

  @media (max-width: 725px) {
    flex-direction: column;
  }
`;

export default StyledHeader;
