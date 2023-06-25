import styled from "styled-components";

export const StyledGitHubCard = styled.a`
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 20px;
  color: #555;
  text-decoration: none;
  font-size: 13px;
  width: 90%;
  min-width: 250px;
  justify-content: space-between;
`;

export const GitHubUserGeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const GitHubUserBasicInfo = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    margin-top: 0;
    padding-top: 10px;
    margin-bottom: 5px;
    color: #4078c0;
    font-size: 15px;
  }

  > p {
    margin-top: 2px;
    margin-bottom: 2px;
  }
`;

export const GitHubOwnerImage = styled.img`
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin-right: 1rem;
`;

export const GitHubCardMeta = styled.span`
  margin-right: 20px;

  > svg {
    margin-right: 4px;
  }
`;
