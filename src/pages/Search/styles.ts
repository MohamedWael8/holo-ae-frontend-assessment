import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchComponent = styled.div<{ issuccessful?: boolean }>`
  width: fit-content;
  margin-left: 30rem;
  margin-right: 30rem;
  margin-bottom: 2rem;
  transition: all 2s ease-in-out;

  ${({ issuccessful }) =>
    issuccessful &&
    `
      margin-left: 1rem;
      margin-right: 0;
    `}
`;

export const SearchInputs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchResultsContainer = styled.div`
  display: grid;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 1rem;
  margin-right: 1rem;
`;
