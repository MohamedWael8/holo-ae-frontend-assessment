import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledGitHubCard,
  GitHubCardMeta,
  GitHubCardLanguageIcon,
} from "./styles";

type GitHubRepoCardProps = {
  fullName: string;
  name: string;
  ownerName: string;
  url: string;
  language: string;
  description: string;
  stars: number;
  forks: number;
};

const GitHubRepoCard: React.FC<GitHubRepoCardProps> = ({
  fullName,
  name,
  ownerName,
  url,
  language,
  description,
  stars,
  forks,
}) => (
  <StyledGitHubCard href={url} data-github={fullName} target="_blank">
    <h3>
      {ownerName}/{name}
    </h3>
    <p>{description}</p>
    <GitHubCardMeta>
      <GitHubCardLanguageIcon>●</GitHubCardLanguageIcon>
      {language}
    </GitHubCardMeta>
    <GitHubCardMeta>
      <FontAwesomeIcon icon="star" />
      <span>{stars}</span>
    </GitHubCardMeta>
    <GitHubCardMeta>
      <FontAwesomeIcon icon="code-fork" />
      <span>{forks}</span>
    </GitHubCardMeta>
  </StyledGitHubCard>
);

export default GitHubRepoCard;
