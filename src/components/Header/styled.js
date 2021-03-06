import styled from "styled-components";

const StyledHeader = styled.header`
  width: calc(100% - 10rem);
  padding: 3rem 5rem 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;

  @media (max-width: 1250px) {
    flex-direction: column;
    .header-nav {
      margin-top: 2rem;
    }
  }
`;

export default StyledHeader;
