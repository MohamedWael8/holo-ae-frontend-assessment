import HeaderTitle from "../../components/HeaderTitle";
import GitHubIcon from "../../assets/icons/github.svg";

const Search: React.FC = () => {
  return (
    <div>
      <HeaderTitle
        icon={GitHubIcon}
        title="GitHub Searcher"
        subtitle="Search users or repositories below"
      />
    </div>
  );
};

export default Search;
