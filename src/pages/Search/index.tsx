import { useEffect, useState } from "react";
import Select from "react-select";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import {
  SearchContainer,
  SearchComponent,
  SearchInputs,
  SearchResultsContainer,
} from "./styles";
import { searchGithHub } from "./helpers";
import HeaderTitle from "../../components/HeaderTitle";
import TextInput from "../../components/TextInput";
import GitHubIcon from "../../assets/icons/github.svg";
import GitHubRepoCard from "../../components/GitHubRepoCard";
import GitHubUserCard from "../../components/GitHubUserCard";
import { IGitHubUserItem } from "../../types/github.types";
import Loader from "../../components/Loader";
import { addQueryAndResults } from "../../features/user/userSlice";

const Search: React.FC = () => {
  const options = [
    { value: "users", label: "Users" },
    { value: "repositories", label: "Repositories" },
  ];

  const [results, setResults] = useState<Array<IGitHubUserItem> | any>([]);
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  }>(options[0]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const cachedSearch = useSelector((state: any) => state);

  const debouncedSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 800);

  const handleSearchOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    debouncedSearch(e.target.value);
  };

  const handleDropDownOnChange = (props: any): void => {
    setResults([]);
    setSelectedOption(props);
  };

  const handleSetResults = (results: Array<IGitHubUserItem>) => {
    setResults(results);
    dispatch(
      addQueryAndResults({
        query: searchQuery,
        type: selectedOption.value,
        results: results,
      })
    );
  };

  useEffect(() => {
    if (searchQuery && searchQuery.length >= 3)
      searchGithHub({
        query: searchQuery,
        cachedSearch,
        type: selectedOption.value,
        setResults: handleSetResults,
        setIsLoading,
      });
    else setResults([]);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length >= 3)
      searchGithHub({
        query: searchQuery,
        cachedSearch,
        type: selectedOption.value,
        setResults: handleSetResults,
        setIsLoading,
      });
  }, [selectedOption]);

  const renderResults = () => {
    if (selectedOption.value === "users")
      return results.map((element: any) => (
        <GitHubUserCard
          key={element.login}
          name={element.login}
          url={element.html_url}
          ownerAvatar={element.avatar_url}
          bio={element.bio}
          location={element.location}
          repos={element.repository_count}
          followers={element.followers}
        />
      ));
    return results.map((element: any) => (
      <GitHubRepoCard
        key={element.full_name}
        fullName={element.full_name}
        name={element.name}
        url={element.html_url}
        ownerName={element.owner.login}
        language={element.language}
        description={element.description}
        stars={element.stargazers_count}
        forks={element.forks_count}
      />
    ));
  };

  return (
    <SearchContainer>
      <SearchComponent issuccessful={results.length > 0}>
        <HeaderTitle
          icon={GitHubIcon}
          title="GitHub Searcher"
          subtitle="Search users or repositories below"
        />
        <SearchInputs>
          <TextInput
            placeholder="Start typing to search .."
            onChange={handleSearchOnChange}
          />
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={selectedOption}
            isSearchable={false}
            name="color"
            options={options as any}
            onChange={handleDropDownOnChange}
          />
        </SearchInputs>
      </SearchComponent>
      <SearchResultsContainer>
        {results.length > 0 ? (
          renderResults()
        ) : isLoading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div>Search GitHub Repos and Users</div>
        )}
      </SearchResultsContainer>
    </SearchContainer>
  );
};

export default Search;
