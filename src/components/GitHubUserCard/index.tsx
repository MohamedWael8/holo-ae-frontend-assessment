import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledGitHubCard,
  GitHubCardMeta,
  GitHubOwnerImage,
  GitHubUserGeneralContainer,
  GitHubUserBasicInfo,
} from "./styles";

type GitHubUserCardProp = {
  name: string;
  url: string;
  ownerAvatar: string;
  bio: string;
  location: string;
  repos: number;
  followers: number;
};

const GitHubUserCard: React.FC<GitHubUserCardProp> = ({
  name,
  url,
  ownerAvatar,
  bio,
  location,
  repos,
  followers,
}) => (
  <StyledGitHubCard href={url} data-github={name} target="_blank">
    <GitHubUserGeneralContainer>
      <GitHubOwnerImage src={ownerAvatar} />
      <GitHubUserBasicInfo>
        <h3>{name}</h3>
        <p>{bio}</p>
      </GitHubUserBasicInfo>
    </GitHubUserGeneralContainer>
    <GitHubCardMeta>
      <FontAwesomeIcon icon="location" />
      {location}
    </GitHubCardMeta>
    <GitHubCardMeta>
      <FontAwesomeIcon icon="book-bookmark" />
      <span>{repos}</span>
    </GitHubCardMeta>
    <GitHubCardMeta>
      <FontAwesomeIcon icon="user-group" />
      <span>{followers}</span>
    </GitHubCardMeta>
  </StyledGitHubCard>
);

export default GitHubUserCard;
