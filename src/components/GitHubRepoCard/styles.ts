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

  > h3 {
    margin-top: 0;
    color: #4078c0;
    font-size: 15px;
  }
`;

export const GitHubOwnerImage = styled.img`
  border-radius: 50%;
`;

export const GitHubCardMeta = styled.span`
  margin-right: 20px;

  > svg {
    margin-right: 4px;
  }
`;

export const GitHubCardLanguageIcon = styled.span`
  color: #7a0410;
  margin-right: 4px;
`;
